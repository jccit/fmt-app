import React from 'react';
import { List, Text } from 'react-native-paper';
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

  if (data) {
    const callingPoints = data.service.subsequentCallingPoints;
    const destination = callingPoints[callingPoints.length - 1];
    
    return (
      <>
        <Text>{data.service.scheduledDeparture} to {destination.name}</Text>
        <List.Section>
          <List.Subheader>Calling Points</List.Subheader>
          {callingPoints.map((callingPoint: any, key: number) => (
            <List.Item
              title={callingPoint.name}
              description={
                callingPoint.estimatedTime === 'On time' ?
                callingPoint.scheduledTime :
                `${callingPoint.estimatedTime}, scheduled at ${callingPoint.scheduledTime}`}
            />
          ))}
        </List.Section>
      </>
    );
  }

  return (
    <Text>There was an error showing service information</Text>
  )
};

export default Service;