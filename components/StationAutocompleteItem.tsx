import React from 'react';
import { View } from 'react-native';
import { Text, Subheading, TouchableRipple } from 'react-native-paper';
import { IStation } from '../lib/stations';

interface IStationAutocompleteItemProps {
  station: IStation;
  onClick: (station: IStation) => void;
}

const StationAutocompleteItem = (props: IStationAutocompleteItemProps) => {
  const { station } = props;

  const onClick = () => {
    props.onClick(props.station);
  }

  return (
    <TouchableRipple onPress={onClick} style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4}}>
      <View>
        <Subheading>{station.name}</Subheading>
        {station.distance ? <Text>{station.distance.toFixed(1)}km</Text> : null }
      </View>
    </TouchableRipple>
  );
}

export default StationAutocompleteItem;