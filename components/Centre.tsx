import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const Centre = (props: any) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
};

export default Centre;