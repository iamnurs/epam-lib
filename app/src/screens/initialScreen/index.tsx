import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, StatusBar, ImageBackground } from "react-native";

import { Button } from "../../components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class Initial extends React.Component<IProps> {
  public static navigationOptions = {
    header: null
  };

  public render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/background.jpg")}
      >
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Button
          title="Вход"
          onPress={() => this.props.navigation.navigate("LogIn")}
          style={styles.button}
        />
        <Button
          title="Регистрация"
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={styles.button}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  button: {
    bottom: 50,
    margin: 10,
    alignSelf: "center"
  }
});
