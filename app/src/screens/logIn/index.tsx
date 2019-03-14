import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Input, Button, SocButton } from "../../components";
import { width } from "../../constants";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class LogIn extends React.Component<IProps> {
  public state = {
    email: "",
    password: ""
  };

  public render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardDismissMode="interactive"
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
            translucent={false}
          />
          <Text style={styles.title}>Вход</Text>
          <Input
            placeholder="E-mail"
            text={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
          />
          <Input
            placeholder="Пароль"
            text={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
            secure={true}
          />
          <Text style={[styles.plainText, styles.right]}>Забыли пароль?</Text>
          <Button title="Вход" onPress={() => null} style={styles.button} />
          <Text style={styles.plainText}>или</Text>
          <SocButton style={styles.button} />
          <View style={[styles.plainText, styles.textContainer]}>
            <Text>Нет аккаунта? </Text>
            <Text
              onPress={() => this.props.navigation.navigate("SignUp")}
              style={styles.pressText}
            >
              Создать аккаунт.
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "#19769f",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  input: {
    marginTop: 20
  },
  plainText: {
    color: "#95989a",
    fontSize: 15,
    marginTop: 20
  },
  right: {
    alignSelf: "flex-end"
  },
  button: {
    marginTop: 20,
    width: width - 60
  },
  textContainer: {
    flexDirection: "row"
  },
  pressText: {
    color: "#19769f"
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center"
  }
});
