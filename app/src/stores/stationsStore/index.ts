import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { fetchAllStations } from "@api";
import { CitiesStore } from "@stores";
import { IStationParams } from "@types";

class StationsStore {
  @persist
  @observable
  public stations: IStationParams[];
  public citiesStore: CitiesStore;

  public rootStore;

  constructor (citiesStore : CitiesStore) {
    this.citiesStore = citiesStore
  }

  public getStations = async () => {
    const stations = await fetchAllStations();

    this.citiesStore.getCities(stations);

    this.setStations(stations);
  };

  @action
  public setStations = stations => {
    this.stations = stations;
  };
}

export default StationsStore;
