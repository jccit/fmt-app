import React, { useState } from 'react';
import { IStation, searchStations } from '../lib/stations';
import { Autocomplete } from 'react-native-paper-autocomplete';

interface IStationInputProps {
  onChange: (station?: IStation) => void;
}

const StationInput = (props: IStationInputProps) => {
  const [value, setValue] = useState<IStation>();
  const [filteredStations, setFilteredStations] = useState<IStation[]>([]);
  const [debounce, setDebounce] = useState<NodeJS.Timeout>();

  const onChange = async (input: string) => {
    if (debounce) {
      clearTimeout(debounce);
    }

    // wait 200ms before searching
    await new Promise(resolve => {
      setDebounce(setTimeout(resolve, 200))
    });

    if (input.length >= 3) {
      setFilteredStations(await searchStations(input));
    } else {
      setFilteredStations([]);
    }
  }

  const stationChanged = (station?: IStation) => {
    setValue(station);

    // Update parent component
    props.onChange(station);
  }

  return (
    <Autocomplete
      value={value}
      onChange={stationChanged}
      options={filteredStations}
      getOptionLabel={(item) => item.name}
      getOptionValue={(item) => item.crs}
      inputProps={{
        label: 'Search for a station',
        onChangeText: onChange
      }}
    />
  )
}

export default StationInput;