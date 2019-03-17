import React, { Component } from "react";
import { AppRegistry, YellowBox } from "react-native";
import App from "./src/App";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Warning: Cannot update during an"
]);

export default class Main extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("epamLib", () => Main);
