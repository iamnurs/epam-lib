import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { LatLng } from "react-native-maps";

class LocationStore {
  @persist
  @observable
  public location: LatLng;

  public rootStore;

  public getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.setLocation(location);
      },
      error => this.getLocation()
    );
  };

  @action
  public setLocation = location => {
    this.location = location;
  };
}

export default LocationStore;
