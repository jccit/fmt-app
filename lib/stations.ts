import { fmtproto } from './proto/station';
import { fetchAssetAsArray } from './assets';
import { LocationObject } from 'expo-location';
import { calculateDistance } from './location';

export interface IStation extends fmtproto.IStation {
  distance?: number;
}

let stationList: fmtproto.StationList;
let loadingPromise: Promise<void> | null = null;

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

export const searchStations = async (partial: string, location?: LocationObject): Promise<fmtproto.IStation[]> => {
  if (!stationList) {
    if (!loadingPromise) {
      loadingPromise = loadStations();
    }

    await loadingPromise;
  }

  const partialLower = partial.toLowerCase();

  let filteredList = stationList.stations.filter(s => s.name?.toLowerCase().includes(partialLower));
  const crsMatch = stationList.stations.find(s => s.crs?.toLowerCase() == partialLower);

  if (crsMatch && !filteredList.includes(crsMatch)) {
    filteredList = [
      crsMatch,
      ...filteredList,
    ];
  }

  if (!location) {
    return filteredList;
  }

  const listWithDistance: IStation[] = filteredList.map(s => {
    if (s.latitude && s.longitude) {
      const distance = calculateDistance(s.latitude, s.longitude, location.coords.latitude, location.coords.longitude);

      return {
        ...s,
        distance,
      };
    }

    return s;
  });

  return listWithDistance.sort((a, b) => {
    if (a.distance && b.distance) {
      return a.distance - b.distance;
    }

    return 0;
  });
}

export const getAllStations = async (): Promise<fmtproto.IStationList> => {
  const stationPb = require('../assets/stations.pb');
  const res = await fetch(stationPb);
  const array = await res.arrayBuffer();

  const stationList = fmtproto.StationList.decode(new Uint8Array(array));
  return stationList;
}