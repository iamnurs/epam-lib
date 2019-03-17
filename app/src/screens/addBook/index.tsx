import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import { Header, Input, Button } from "../../components";
import { postBook } from "../../redux/ActionCreaters.js";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  postBook: cred => dispatch(postBook(cred))
});

class AddBook extends React.Component<IProps> {
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
        <Button
          title="Добавить"
          style={{ marginTop: 10 }}
          onPress={() =>
            this.props
              .postBook({
                newBook: {
                  author: this.state.author,
                  title: this.state.name,
                  genre: this.state.genre
                },
                token: this.props.user.token
              })
              .then(() => this.props.navigation.getParam("update")())
              .then(() => this.props.navigation.goBack())
          }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
