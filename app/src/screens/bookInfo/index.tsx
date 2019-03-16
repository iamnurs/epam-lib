import React from "react";
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { Header } from "../../components";

// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

export default class BookInfo extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header headerText="Библиотека" />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150
  },
  gradient: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 100
    }
  },
  rightIcon: {
    alignSelf: "flex-end",
    marginRight: 15
  },
  header: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginLeft: 15
  }
});
