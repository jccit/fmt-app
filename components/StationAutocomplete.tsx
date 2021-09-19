import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Surface } from 'react-native-paper';
import { IStation, searchStations } from '../lib/stations';
import StationAutocompleteItem from './StationAutocompleteItem';

interface IStationAutocompleteProps {
  input: string;
  onChange: (station?: IStation) => void;
}

const styles = StyleSheet.create({
  surface: {
    padding: 8
  }
});

const StationAutocomplete = (props: IStationAutocompleteProps) => {
  const [selected, setSelected] = useState<IStation>();
  const [filteredStations, setFilteredStations] = useState<IStation[]>([]);

  useEffect(() => {
    searchStations(props.input).then(stations => {
      setFilteredStations(stations);
    });
  }, [props.input]);

  const stationChanged = (station?: IStation) => {
    setSelected(station);

    // Update parent component
    props.onChange(station);
  }

  const renderItem = ({ item }: { item: IStation }) => {
    return <StationAutocompleteItem station={item} onClick={stationChanged} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Surface style={styles.surface}>
        { filteredStations.length == 0 ? <ActivityIndicator /> : null }
        <FlatList
          data={filteredStations}
          renderItem={renderItem}
          keyExtractor={(item: IStation) => item.crs ?? 'station'}
          keyboardShouldPersistTaps="always"
        />
      </Surface>
    </View>
  );
}

export default StationAutocomplete;