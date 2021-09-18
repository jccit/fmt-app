import React, { useState } from 'react';
import DepartureList from '../components/DepartureList';
import StationInput from '../components/StationInput';
import { IStation } from '../lib/stations';

const Departures = (props: any) => {
  const { navigation } = props;
  const [station, setStation] = useState<IStation>();

  return (
    <>
      <StationInput onChange={setStation} />
      { station ? <DepartureList navigation={navigation} crs={station.crs} /> : null }
    </>
  )
};

export default Departures;