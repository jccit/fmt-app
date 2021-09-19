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
    <TouchableRipple onPress={onClick} style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4}}>
      <Subheading>{station.name}</Subheading>
    </TouchableRipple>
  );
}

export default StationAutocompleteItem;