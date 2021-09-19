import React from 'react';
import { Subheading, TouchableRipple } from 'react-native-paper';
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
    <TouchableRipple onPress={onClick}>
      <Subheading>{station.name}</Subheading>
    </TouchableRipple>
  );
}

export default StationAutocompleteItem;