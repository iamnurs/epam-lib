import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import StarRating from "react-native-star-rating";

import { Header, Input, Button } from "../../components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class BookInfo extends React.Component<IProps> {
  public state = {
    name: "Нурсултан",
    rating: 4,
    author: "Дж. Кинг",
    genre: "Ужас",
    description:
      "Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернуться, приоткрывает дверь последнего пристанища тех, кто преступил не только человеческий, но и Божий закон. ",
    bookName: "Алибаба",
    available: true,
    bookPhoto:
      "https://d1b14unh5d6w7g.cloudfront.net/0062413406.01.S001.LXXXXXXX.jpg?Expires=1552832014&Signature=OM/4p5W+Ylyn5OegEZFAHSy3OM5MjNzCMN+ZB3s9xQxF1ROt/FfcIB25xeg1a6uKdanh1rHbhCN3Y/PW+v+12Xqmo6ymetSnKUFTxJG5MiqNJ3J1jIlhjAoUGNYZW9s8fSNllm0e2wD2ZpM9kXsmyKtnHXD0EKWplrILgH24z1U=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
  };

  public render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Книга"
          onBack={true}
          navigation={this.props.navigation}
          bookmark={true}
        />
        <View style={styles.bookWrapper}>
          <Image source={{ uri: this.state.bookPhoto }} style={styles.image} />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{this.state.bookName}</Text>
            <View style={styles.smallWrapper}>
              <Text style={styles.text}>Автор: </Text>
              <Text style={styles.author}>{this.state.author}</Text>
            </View>
            <View style={styles.smallWrapper}>
              <Text style={styles.text}>Жанр: </Text>
              <Text style={styles.genre}>{this.state.genre}</Text>
            </View>
            <View style={styles.smallWrapper}>
              <Text style={styles.text}>Владелец: </Text>
              <Text style={styles.name}>{this.state.name}</Text>
            </View>
            <View style={styles.smallWrapper}>
              <Text style={styles.text}>Доступен: </Text>
              <Text
                style={[
                  styles.available,
                  { color: this.state.available ? "#35d5ac" : "red" }
                ]}
              >
                {this.state.available ? "Доступен" : "Не доступен"}
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
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Запросить книгу"
          onPress={() => null}
          style={styles.button}
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
    alignSelf: "center"
  },
  stars: {
    marginLeft: 10,
    width: "50%",
    marginTop: 10
  }
});
