import React, { useState } from 'react';
import { List, Text } from 'react-native-paper';
import { FlatList, RefreshControl } from 'react-native';
import { useQuery, gql, NetworkStatus } from '@apollo/client';

const Service = (props: { route: any }) => {
  const { route } = props;
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
      <Text>Loading</Text>
    )
  }

  if (data) {
    const callingPoints = data.service.subsequentCallingPoints;
    const destination = callingPoints[callingPoints.length - 1];
    
    return (
      <>
        <Text>{data.service.scheduledDeparture} to {destination.name}</Text>
        <FlatList
          data={callingPoints}
          renderItem={renderItem}
          keyExtractor={(item, _) => item.crs}
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
    <Text>There was an error showing service information</Text>
  )
};

export default Service;