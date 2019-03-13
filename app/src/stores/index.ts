import StationsStore from "./stationsStore";
import CitiesStore from "./citiesStore";
import LocationStore from "./locationStore";

class RootStore {
  public stationsStore: StationsStore;
  public citiesStore: CitiesStore;
  public locationStore: LocationStore;

  constructor() {
    this.citiesStore = new CitiesStore();
    this.stationsStore = new StationsStore(this.citiesStore);
    this.locationStore = new LocationStore();
  }
}

const rootStore = new RootStore();

export default rootStore;
export { StationsStore, CitiesStore, LocationStore };
