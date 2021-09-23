import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

let tocs: any = null;

const OperatorLogo = (props: { code: string }) => {
  const { code } = props;
  const [colours, setColours] = useState({
    backgroundColor: '#000000',
    color: '#ffffff'
  });
  const [name, setName] = useState(code);

  useEffect(() => {
    if (!tocs) {
      const loaded = require('../assets/tocs.json');
      if (loaded.tocs) {
        tocs = loaded.tocs;
      }
    }
  });

  useEffect(() => {
    const toc = tocs[code];
    if (toc) {
      if (toc.bg && toc.text) {
        setColours({
          backgroundColor: toc.bg,
          color: toc.text,
        });
      }

      if (toc.name) {
        setName(toc.name);
      }
    }
  }, [tocs]);

  return (
    <View style={styles.container}>
      <Chip style={{ backgroundColor: colours.backgroundColor }} textStyle={{ color: colours.color }}>{name}</Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default OperatorLogo;