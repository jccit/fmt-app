import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { streamToArray } from './stream';
import Base64Binary from './base64';

export async function fetchAssetAsArray(assetId: any): Promise<Uint8Array | null> {
  const asset = await Asset.loadAsync(assetId);

  if (asset && asset.length > 0 && asset[0].localUri) {
    const localUri = asset[0].localUri;

    // check if localUri is a file uri
    // if so, load from filesystem
    if (localUri.startsWith('file://')) {
      const data = await FileSystem.readAsStringAsync(localUri, { encoding: FileSystem.EncodingType.Base64 });
      const array = Base64Binary.decode(data);
      return array;
    }

    // load over network
    const res = await fetch(localUri);
    if (res.body) {
      return streamToArray(res.body);
    }
  }

  return null;
}

export async function fetchAssetAsString(assetId: string): Promise<string | null> {
  const asset = await Asset.loadAsync(assetId);

  if (asset && asset.length > 0 && asset[0].localUri) {
    const localUri = asset[0].localUri;

    // check if localUri is a file uri
    // if so, load from filesystem
    if (localUri.startsWith('file://')) {
      return FileSystem.readAsStringAsync(localUri, { encoding: FileSystem.EncodingType.Base64 });
    }

    // load over network
    const res = await fetch(localUri);
    return res.text();
  }

  return null;
}