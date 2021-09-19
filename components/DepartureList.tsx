import React, { useState } from 'react';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { Text, List, ActivityIndicator } from 'react-native-paper';
import { FlatList, RefreshControl } from 'react-native';
import OperatorLogo from './OperatorLogo';
import Centre from './Centre';

interface IDepartureItemProps {
  scheduledDeparture: string;
  serviceID: string;
  platform: string;
  operatorCode: string;
  destination: {
    name: string;
  }
  navigation: any;
}

const DepartureItem = (props: IDepartureItemProps) => {
  return (
    <List.Item
      title={`${props.scheduledDeparture} - ${props.destination.name}`}
      description={`Platform ${props.platform || 'unknown'}`}
      right={rProps => <OperatorLogo code={props.operatorCode} />}
      onPress={() => props.navigation.navigate('Service', { id: props.serviceID })}
    />
  );
}

interface IDepartureListProps {
  crs: string;
  navigation: any;
}

const DepartureList = (props: IDepartureListProps) => {
  const { navigation, crs } = props;
  const [refreshing, setRefresh] = useState(false);
  const { loading, data, refetch, networkStatus } = useQuery(gql`
    query GetDepartures($crs: String!) {
      departures(crs: $crs) {
        id
        serviceID
        scheduledDeparture
        platform
        operatorCode
        destination {
          name
        }
      }
    }
  `, {
    variables: { crs },
  });

  const renderItem = ({ item }: { item: any }) => {
    return <DepartureItem {...item} navigation={navigation} />
  }

  const onRefresh = async () => {
    setRefresh(true);
    await refetch();
    setRefresh(false);
  }

  if (loading && networkStatus != NetworkStatus.refetch) {
    return (
      <Centre>
        <ActivityIndicator />
      </Centre>
    )
  }

  if (data && data.departures) {
    return (
      <FlatList
        data={data.departures}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    )
  }

  return (
    <Centre>
      <Text style={{ fontSize: 18 }}>No departures</Text>
    </Centre>
  )
}

export default DepartureList;