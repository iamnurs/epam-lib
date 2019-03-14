import React, { SFC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LEFT_GRADIENT, RIGHT_GRADIENT } from "../../constants";

interface IProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button: SFC<IProps> = props => {
  const { title = "", onPress = () => null } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, props.style]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[LEFT_GRADIENT, RIGHT_GRADIENT]}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Button;
