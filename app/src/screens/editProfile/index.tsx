import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, Input, Button } from "../../components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class EditProfile extends React.Component<IProps> {
  public state = {
    name: "",
    email: "",
    city: "",
    phone: ""
  };

  public render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Редактирование"
          onBack={true}
          navigation={this.props.navigation}
        />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardDismissMode="interactive"
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("../../assets/photo.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Сменить фото профиля</Text>
          <Input
            placeholder="Имя"
            onChangeText={text => this.setState({ name: text })}
            text={this.state.name}
            style={styles.input}
          />
          <Input
            placeholder="Почта"
            onChangeText={text => this.setState({ email: text })}
            text={this.state.email}
            style={styles.input}
          />
          <Input
            placeholder="Город"
            onChangeText={text => this.setState({ city: text })}
            text={this.state.city}
            style={styles.input}
          />
          <Input
            placeholder="Номер"
            onChangeText={text => this.setState({ phone: text })}
            text={this.state.phone}
            style={styles.input}
          />
          <Button
            title="Сохранить"
            onPress={() => null}
            style={styles.button}
          />
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
  input: {
    width: "85%",
    marginTop: 15
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 5,
    marginTop: 10
  },
  text: {
    fontSize: 16,
    color: "#19769f",
    marginTop: 10
  },
  button: {
    marginTop: 10,
    width: "85%"
  },
  scroll: {
    flexGrow: 1,
    alignItems: "center"
  }
});
