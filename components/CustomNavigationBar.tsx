import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomNavigationBar = (props: { navigation: any, previous: any }) => {
  const { navigation, previous } = props;

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;