import { fmtproto } from './proto/station';
import { fetchAssetAsArray } from './assets';

export type IStation = fmtproto.IStation;

let stationList: fmtproto.StationList;

const loadStations = async () => {
  if (!stationList) {
    const stationPb = require('../assets/stations.pb');
    try {
      const array = await fetchAssetAsArray(stationPb);
      
      if (array) {
        stationList = fmtproto.StationList.decode(array);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const searchStations = async (partial: string): Promise<fmtproto.IStation[]> => {
  await loadStations();

  const partialLower = partial.toLowerCase();
  return stationList.stations.filter(s => s.name?.toLowerCase().includes(partialLower));
};

export const getAllStations = async (): Promise<fmtproto.IStationList> => {
  const stationPb = require('../assets/stations.pb');
  const res = await fetch(stationPb);
  const array = await res.arrayBuffer();

  const stationList = fmtproto.StationList.decode(new Uint8Array(array));
  return stationList;
}