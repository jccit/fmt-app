import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, List } from 'react-native-paper';

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
  )
}

const Departures = (props: any) => {
  const { navigation } = props;
  const { loading, data } = useQuery(gql`
    query GetDepartures {
      departures(crs: "sop") {
        id
        serviceID
        scheduledDeparture
        platform
        destination {
          name
        }
      }
    }
  `);

  console.log(data);

  if (loading) {
    return (
      <Text>Loading</Text>
    )
  }

  if (data && data.departures) {
    return (
      <List.Section>
        {data.departures.map((departure: IDepartureItemProps, key: number) => {
          return <DepartureItem {...departure} navigation={navigation} key={key} />
        })}
      </List.Section>
    );
  }

  return (
    <Text>There was an error showing departures</Text>
  )
};

export default Departures;