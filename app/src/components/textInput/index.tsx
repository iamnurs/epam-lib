import React, { SFC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { width } from "../../constants";

interface IProps extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  text: string;
  secure?: boolean;
}

const Input: SFC<IProps> = props => {
  const { placeholder, onChangeText, text, secure = false } = props;

  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.container, props.style]}
      onChangeText={onChangeText}
      value={text}
      secureTextEntry={secure}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width - 60,
    padding: 10,
    borderWidth: 1,
    borderColor: "#d5d5d5",
    borderRadius: 5,
    color: "#95989a",
    justifyContent: "center"
  }
});

export default Input;
