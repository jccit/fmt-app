export interface IStation {
  crs: string;
  name: string;
}

export const searchStations = async (partial: string): Promise<IStation[]> => {
  const res = await fetch(`https://fmt-stations.fly.dev/search/${partial}`)
  return res.json();
};
