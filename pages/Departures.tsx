import React from 'react';
import { Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { List } from 'react-native-paper';

interface IDepartureItemProps {
  scheduledDeparture: string;
  platform: string;
  destination: {
    name: string;
  }
}

const DepartureItem = (props: IDepartureItemProps) => {
  return (
    <List.Item
      title={`${props.scheduledDeparture} - ${props.destination.name}`}
      description={`Platform ${props.platform || 'unknown'}`}
    />
  )
}

const Departures = () => {
  const { loading, data } = useQuery(gql`
    query GetDepartures {
      departures(crs: "sop") {
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
          return <DepartureItem {...departure} key={key} />
        })}
      </List.Section>
    );
  }

  return (
    <Text>There was an error showing departures</Text>
  )
};

export default Departures;