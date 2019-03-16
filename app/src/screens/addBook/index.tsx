import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { Header, Input } from "../../components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class AddBook extends React.Component<IProps> {
  public state = {
    name: "",
    author: "",
    genre: "",
    description: ""
  };

  public render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Добавить книгу"
          onBack={true}
		  navigation={this.props.navigation}
		  download={true}
        />
        <Input
          placeholder="Название"
          onChangeText={text => this.setState({ name: text })}
          text={this.state.name}
          style={styles.input}
        />
        <Input
          placeholder="Автор"
          onChangeText={text => this.setState({ author: text })}
          text={this.state.author}
          style={styles.input}
        />
        <Input
          placeholder="Жанр"
          onChangeText={text => this.setState({ genre: text })}
          text={this.state.genre}
          style={styles.input}
        />
        <Input
          placeholder="Описание"
          onChangeText={text => this.setState({ description: text })}
          text={this.state.description}
          multiline={true}
          style={[styles.input, styles.multiline]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  input: {
    width: "90%",
    marginTop: 20
  },
  multiline: {
    height: 120,
    textAlignVertical: "top"
  }
});
