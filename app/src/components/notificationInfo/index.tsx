import React, { SFC } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ViewProps,
  ImageStyle
} from "react-native";

interface IProps extends ViewProps {
  name?: string;
  photo?: string | number;
  book?: string;
}

const NotificationInfo: SFC<IProps> = props => {
  const {
    name = "Nursultan",
    photo = require("../../assets/photo.jpg"),
    book = "Зеленая Миля"
  } = props;

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.wrapper}>
        <Image
          source={photo}
          style={styles.image as ImageStyle}
          resizeMode="cover"
        />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>Хочет взять у вас книгу</Text>
          <Text style={styles.book}>{book}</Text>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  wrapper: {
    height: 80,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  image: {
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    width: 62,
    height: 62
  },
  textWrapper: {
    flex: 3,
    justifyContent: "space-around"
  },
  name: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold"
  },
  text: {
    fontSize: 13,
    color: "#95989a"
  },
  book: {
    fontSize: 15,
    color: "#464547",
    fontWeight: "bold"
  },
  border: {
    width: "90%",
    marginTop: 10,
    height: 1,
    backgroundColor: "#f4f4f6",
    alignSelf: "center"
  }
});

export default NotificationInfo;
