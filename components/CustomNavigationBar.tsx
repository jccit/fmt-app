import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { APPROX_STATUSBAR_HEIGHT } from 'react-native-paper/src/constants';

const CustomNavigationBar = (props: NativeStackHeaderProps) => {
  const { navigation, back, options } = props;
  const theme = useTheme();
  const title = options.title || props.route.name || 'Train finder';

  if (!back) {
    return (
      <View style={{ backgroundColor: theme.colors.background, height: APPROX_STATUSBAR_HEIGHT }} />
    );
  }

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;