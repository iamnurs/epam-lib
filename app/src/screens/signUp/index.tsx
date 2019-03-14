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
    password: "",
    confirmPassword: "",
    name: "",
    number: ""
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
          <Text style={styles.title}>Регистрация</Text>
          <Input
            placeholder="Имя"
            text={this.state.name}
            onChangeText={text => this.setState({ name: text })}
            style={styles.input}
          />
          <Input
            placeholder="E-mail"
            text={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
          />
          <Input
            placeholder="Номер"
            text={this.state.number}
            onChangeText={text => this.setState({ number: text })}
            style={styles.input}
          />
          <Input
            placeholder="Пароль"
            text={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
            secure={true}
          />
          <Input
            placeholder="Подтвердите пароль"
            text={this.state.confirmPassword}
            onChangeText={text => this.setState({ confirmPassword: text })}
            style={styles.input}
            secure={true}
          />
          <Button
            title="Зарегистрироваться"
            onPress={() => null}
            style={styles.button}
          />
          <Text style={styles.plainText}>или</Text>
          <SocButton style={styles.button} />
          <View style={[styles.plainText, styles.textContainer]}>
            <Text>Есть аккаунт? </Text>
            <Text
              onPress={() => this.props.navigation.navigate("LogIn")}
              style={styles.pressText}
            >
              Войти.
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
    marginTop: 10,
    height: 45
  },
  plainText: {
    color: "#95989a",
    fontSize: 15,
    marginTop: 10
  },
  right: {
    alignSelf: "flex-end"
  },
  button: {
    marginTop: 10,
    width: width - 60
  },
  textContainer: {
    flexDirection: "row"
  },
  pressText: {
    color: "#19769f"
  },
  scroll: {
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center"
  }
});
