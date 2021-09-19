import React, { useState } from 'react';
import { ActivityIndicator, List, Text } from 'react-native-paper';
import { FlatList, RefreshControl } from 'react-native';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import Centre from '../components/Centre';

const Service = (props: { route: any }) => {
  const { route, navigation } = props;
  const { id } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch, networkStatus } = useQuery(gql`
    query GetService($id: ID!) {
      service(id: $id) {
        id
        platform
        operator
        scheduledDeparture
        estimatedDeparture
        subsequentCallingPoints {
          name
          scheduledTime
          estimatedTime
          actualTime
        }
      }
    }
  `, {
    variables: { id }
  });

  const getTime = (item: any): string => {
    if (item.estimatedTime === 'On time') {
      return `Due at ${item.scheduledTime}`;
    }

    if (item.actualTime === 'On time') {
      return `Arrived at ${item.scheduledTime}`;
    }

    if (item.actualTime === '' && item.estimatedTime !== 'On time') {
      return `Due at ${item.estimatedTime}, scheduled at ${item.scheduledTime}`;
    }

    if (item.actualTime !== 'On time' && item.estimatedTime === '') {
      return `Arrived at ${item.estimatedTime}, scheduled at ${item.scheduledTime}`;
    }

    return item.scheduledTime;
  }

  const hasArrived = (item: any): boolean => item.actualTime !== '';

  const renderItem = ({ item }: { item: any }) => {
    return (
      <List.Item
        title={item.name}
        description={getTime(item)}
        key={item.crs}
      />
    );
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  if (loading && networkStatus != NetworkStatus.refetch) {
    return (
      <Centre>
        <ActivityIndicator />
      </Centre>
    )
  }

  if (data) {
    const callingPoints = data.service.subsequentCallingPoints;

    if (callingPoints) {
      const destination = callingPoints[callingPoints.length - 1];
      navigation.setOptions({ title: `${data.service.scheduledDeparture} to ${destination.name}` });
    
      return (
        <>
          <FlatList
            data={callingPoints}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        </>
      );
    }

    return (
      <Centre>
        <Text style={{fontSize: 20}}>Service has no calling points</Text>
      </Centre>
    )
  }

  return (
    <Text>There was an error showing service information</Text>
  )
};

export default Service;