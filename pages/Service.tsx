import React from 'react';
import { List, Text } from 'react-native-paper';
import { FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const Service = (props: { route: any }) => {
  const { route } = props;
  const { id } = route.params;

  const { loading, data } = useQuery(gql`
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
        }
      }
    }
  `, {
    variables: { id }
  });

  if (loading) {
    return (
      <Text>Loading</Text>
    )
  }

  const renderItem = ({ item }: { item: any }) => {
    return (
      <List.Item
        title={item.name}
        description={
          item.estimatedTime === 'On time' ?
          item.scheduledTime :
          `${item.estimatedTime}, scheduled at ${item.scheduledTime}`}
      />
    );
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
          
        />
      </>
    );
  }

  return (
    <Text>There was an error showing service information</Text>
  )
};

export default Service;