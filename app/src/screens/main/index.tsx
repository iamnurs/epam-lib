import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class Main extends React.Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});