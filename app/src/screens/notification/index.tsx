import React from "react";
// import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, View, FlatList } from "react-native";

import { NotifyInfo, Header } from "../../components";

// interface IProps {
// navigation: NavigationScreenProp<NavigationState>;
// }

export default class Notification extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Header headerText="Уведомления" />
        <FlatList
          renderItem={() => <NotifyInfo />}
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(key, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
