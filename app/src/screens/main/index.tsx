import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
  ActivityIndicator
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon2 from "react-native-vector-icons/dist/Feather";
import { SearchBar, Icon } from "react-native-elements";
import { FlatGrid } from "react-native-super-grid";
import { LEFT_GRADIENT, RIGHT_GRADIENT } from "../../constants";
import { Card } from "../../components";
import { connect } from "react-redux";
import {
  fetchBooks,
  addToFav,
  delFromFav
} from "../../redux/ActionCreaters.js";

window.navigator.userAgent = "react-native";
import SocketIOClient from "socket.io-client";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const mapStateToProps = state => ({
  books: state.books,
  token: state.token,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  addToFav: creds => dispatch(addToFav(creds)),
  delFromFav: creds => dispatch(delFromFav(creds))
});

class Main extends React.Component<IProps> {
  public state = {
    books: [],
    filter: false,
    name: "",
    author: "",
    genre: "",
    refreshing: false
  };

  constructor(props) {
    super(props);
    this.socket = SocketIOClient("https://epam-lib.herokuapp.com", {
      jsonp: false
    });
    this.socket.on(this.props.user.user._id, data => {
      console.warn("Data recieved from server", data);
    });
  }

  public componentDidMount() {
    this.updateBooks();
  }

  public render() {
    const {
      container,
      gradient,
      rightIcon,
      header,
      gridView,
      addButton
    } = styles;
    return (
      <React.Fragment>
        <View style={this.state.filter ? styles.increasedContainer : container}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[LEFT_GRADIENT, RIGHT_GRADIENT]}
            style={gradient}
          >
            <TouchableOpacity
              style={rightIcon}
              onPress={() =>
                this.setState(prevState => ({ filter: !prevState.filter }))
              }
            >
              <Icon2 name="filter" size={23} color="white" />
            </TouchableOpacity>
            {!this.state.filter && <Text style={header}>Все книги</Text>}

            <SearchBar
              placeholder="Название"
              onChangeText={this.searchByName}
              lightTheme={true}
              value={this.state.name}
              containerStyle={{
                backgroundColor: "transparent",
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                margin: 5
              }}
              inputStyle={{
                backgroundColor: "white",
                borderRadius: 10
              }}
            />

            {this.state.filter && (
              <SearchBar
                placeholder="Жанр"
                onChangeText={this.searchByGenre}
                lightTheme={true}
                value={this.state.genre}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  margin: 5,
                  marginTop: -10
                }}
                inputStyle={{
                  backgroundColor: "white",
                  borderRadius: 10
                }}
              />
            )}
            {this.state.filter && (
              <SearchBar
                placeholder="Автор"
                onChangeText={this.searchByAuthor}
                lightTheme={true}
                value={this.state.author}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  margin: 5,
                  marginTop: -10
                }}
                inputStyle={{
                  backgroundColor: "white",
                  borderRadius: 10
                }}
              />
            )}
          </LinearGradient>
        </View>
        {this.props.books.isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatGrid
            itemDimension={160}
            items={this.state.books}
            style={gridView}
            spacing={10}
            onRefresh={() => this.updateBooks()}
            refreshing={this.state.refreshing}
            onScroll={() => this.setState({ filter: false })}
            renderItem={({ item }) => (
              <Card
                uri={"https:" + item.image}
                title={item.title}
                available={item.owner !== item.tenant}
                inFav={
                  this.props.user.user.favorites.filter(
                    book => item._id === book
                  ).length > 0
                }
                onPress={() => {
                  this.props.navigation.navigate("BookInfo", { item });
                }}
                onFavPress={() =>
                  this.props.user.user.favorites.filter(
                    book => item._id === book
                  ).length > 0
                    ? this.props.delFromFav({
                        token: this.props.user.token,
                        id: { book: item._id }
                      })
                    : this.props.addToFav({
                        token: this.props.user.token,
                        id: { book: item._id }
                      })
                }
              />
            )}
          />
        )}
        <Icon
          raised={true}
          name="add"
          type="materialicons"
          color="white"
          containerStyle={addButton}
          onPress={() =>
            this.props.navigation.navigate("AddBook", {
              update: this.updateBooks
            })
          }
          underlayColor={"#35daaa"}
        />
      </React.Fragment>
    );
  }

  private searchByName = text => {
    const newBooks = this.props.books.books.filter(book =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ books: newBooks, name: text });
  };
  private searchByAuthor = text => {
    const newBooks = this.props.books.books.filter(book =>
      book.author.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ books: newBooks, author: text });
  };
  private searchByGenre = text => {
    const newBooks = this.props.books.books.filter(book =>
      book.genre.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ books: newBooks, genre: text });
  };
  private updateBooks = async () => {
    this.setState({ refreshing: true });
    await this.props.fetchBooks();
    const books = this.props.books.books.filter(
      item => item.owner._id !== this.props.user.user._id
    );
    this.setState({
      books,
      refreshing: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === "ios" ? 150 : 160
  },
  increasedContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? 220 : 240
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
  },
  gridView: {
    marginTop: 0,
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 35 : 30,
    backgroundColor: "#fff"
  },
  addButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#35d8a6"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
