import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, List } from 'react-native-paper';
import { FlatList } from 'react-native';

interface IDepartureItemProps {
  scheduledDeparture: string;
  serviceID: string;
  platform: string;
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
  const { loading, data } = useQuery(gql`
    query GetDepartures($crs: String!) {
      departures(crs: $crs) {
        id
        serviceID
        scheduledDeparture
        platform
        destination {
          name
        }
      }
    }
  `, {
    variables: { crs },
  });

  console.log(data);

  if (loading) {
    return (
      <Text>Loading</Text>
    )
  }

  const renderItem = ({ item }: { item: any }) => {
    return <DepartureItem {...item} navigation={navigation} />
  }

  if (data && data.departures) {
    return (
      <FlatList
        data={data.departures}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    )
  }

  return (
    <Text>There was an error showing departures</Text>
  )
}

export default DepartureList;