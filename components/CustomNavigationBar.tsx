import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomNavigationBar = (props: NativeStackHeaderProps) => {
  const { navigation, back } = props;
  const title = props.route.name || 'Train finder';

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;