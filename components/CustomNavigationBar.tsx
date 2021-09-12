import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomNavigationBar = (props: { navigation: any, back: any }) => {
  const { navigation, back } = props;

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Train finder" />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;