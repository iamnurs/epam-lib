import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Input, Button, SocButton } from "../../components";
import { width } from "../../constants";
import { connect } from "react-redux";
import { loginUser, facebookAuth } from "../../redux/ActionCreaters.js";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  loginUser: creds => dispatch(loginUser(creds)),
  facebookAuth: () => dispatch(facebookAuth())
});

class LogIn extends React.Component<IProps> {
  public state = {
    email: "nurs@mail.ru",
    password: "123456"
  };

  public render() {
    if (this.props.user.isAuthenticated) {
      this.props.navigation.navigate("App");
    }
    return (
      <View style={styles.container}>
        {this.props.user.isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
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
            <Button
              title="Вход"
              onPress={() =>
                this.props.loginUser({
                  username: this.state.email,
                  password: this.state.password
                })
              }
              style={styles.button}
            />
            <Text style={styles.plainText}>или</Text>
            <SocButton
              style={styles.button}
              navigation={this.props.navigation}
              fbauth={() => this.props.facebookAuth()}
            />
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
        )}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
