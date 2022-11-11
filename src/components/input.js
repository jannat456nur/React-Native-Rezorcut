import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";


export default function Input({
  placeholder,
  multiline,
  numberOfLines,
  secureTextEntry = false,
  onChangeText,
  autoCapitalize,
  value,
  title
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      autoCorrect={false}
      value={value}
      autoCapitalize={autoCapitalize}
      numberOfLines={numberOfLines}
      multiline={multiline}

    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 380,
    borderColor: "grey",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    alignSelf: "center",
  },
});
