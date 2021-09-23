import * as Location from 'expo-location';
import { Platform } from 'react-native';

export async function getLocationWithoutPerms() {
  const permissions = await Location.getForegroundPermissionsAsync();
  let accuracy = Location.Accuracy.Balanced;

  if (Platform.OS === 'android') {
    if (permissions.android?.accuracy === 'coarse') {
      accuracy = Location.Accuracy.Lowest;
    } else {
      let location = await Location.getLastKnownPositionAsync({
        requiredAccuracy: Location.Accuracy.Lowest,
        maxAge: 600000
      });
      if (location) {
        return location;
      }
    }
  }

  let location = await Location.getCurrentPositionAsync({ accuracy });
  if (location) {
    return location;
  }

  return null;
}

export async function getLocation() {
  try {
    if (await Location.hasServicesEnabledAsync()) {
      const permissions = await Location.getForegroundPermissionsAsync();
      
      if (permissions.granted === false) {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          return getLocationWithoutPerms();
        }
      }

      return getLocationWithoutPerms();
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}
function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}