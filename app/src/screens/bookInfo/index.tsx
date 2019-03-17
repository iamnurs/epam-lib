import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from "react-native";
import StarRating from "react-native-star-rating";
import { connect } from "react-redux";

window.navigator.userAgent = "react-native";
import SocketIOClient from "socket.io-client";

import { Header, Input, Button } from "../../components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const mapStateToProps = state => ({
  user: state.user,
  token: state.token,
  books: state.books
});

class BookInfo extends React.Component<IProps> {
  public state = {
    rating: 5
  };

  constructor(props) {
    super(props);
    this.socket = SocketIOClient("https://epam-lib.herokuapp.com", {
      jsonp: false
    });
  }

  public render() {
    const item = this.props.navigation.getParam("item");

    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText="Книга"
          onBack={true}
          navigation={this.props.navigation}
          bookmark={true}
        />
        <ScrollView style={styles.container}>
          <View style={styles.bookWrapper}>
            <Image
              source={{ uri: "https:" + item.image }}
              style={styles.image}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.smallWrapper}>
                <Text style={styles.text}>Автор: </Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>
              <View style={styles.smallWrapper}>
                <Text style={styles.text}>Жанр: </Text>
                <Text style={styles.genre}>{item.genre}</Text>
              </View>
              <View style={styles.smallWrapper}>
                <Text style={styles.text}>Владелец: </Text>
                <Text style={styles.name}>{item.owner.name}</Text>
              </View>
              <View style={styles.smallWrapper}>
                <Text style={styles.text}>Статусx: </Text>
                <Text
                  style={[
                    styles.available,
                    {
                      color:
                        item.owner._id === item.tenant._id ? "#35d5ac" : "red"
                    }
                  ]}
                >
                  {item.owner._id === item.tenant._id
                    ? "Доступен"
                    : "Не доступен"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.smallWrapper}>
            <Text style={[styles.text, { marginTop: 10, marginLeft: 10 }]}>
              Рейтинг:{" "}
            </Text>
            <Text style={[styles.rating, { marginTop: 10 }]}>
              {this.state.rating} из 5
            </Text>
          </View>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.state.rating}
            fullStarColor="#35d5ac"
            emptyStarColor="#35d5ac"
            starSize={30}
            containerStyle={styles.stars}
          />
          <Text style={[styles.text, { margin: 10 }]}>Описание: </Text>
          <Text style={styles.description}>{item.description}</Text>
          <Button
            title="Запросить книгу"
            onPress={() => this.onBookRequest()}
            style={styles.button}
          />
        </ScrollView>
      </View>
    );
  }

  private onBookRequest = () => {
    const item = this.props.navigation.getParam("item");
    this.socket.emit("notify", {
      from: this.props.user.user._id,
      to: item.owner._id,
      book: item._id
    });
    this.props.navigation.goBack();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bookWrapper: {
    flexDirection: "row",
    maxHeight: 200,
    margin: 10
  },
  image: {
    borderRadius: 12,
    width: 125,
    height: 187.5,
    marginRight: 10
  },
  textWrapper: {
    justifyContent: "space-between"
  },
  title: {
    fontSize: 22,
    color: "#464547",
    fontWeight: "bold"
  },
  smallWrapper: {
    flexDirection: "row"
  },
  text: {
    fontSize: 17,
    color: "#95989a"
  },
  author: {
    fontSize: 17,
    color: "#19769f"
  },
  genre: {
    color: "#464547",
    fontSize: 17
  },
  name: {
    color: "#39c2d7",
    fontSize: 17
  },
  available: {
    color: "#35d5ac",
    fontSize: 17
  },
  rating: {
    color: "#464547",
    fontSize: 17
  },
  description: {
    color: "#464547",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20
  },
  stars: {
    marginLeft: 10,
    width: "50%",
    marginTop: 10
  }
});

export default connect(mapStateToProps)(BookInfo);
