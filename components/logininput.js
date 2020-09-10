import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { TextInput } from "react-native";

const { width } = Dimensions.get("window");

export default function LoginInput({ holder, isPass }) {
  const [value, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={holder}
        placeholderTextColor="#494dae"
        secureTextEntry={isPass}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0d17",
    width: width * 0.65,
    height: 50,
    borderRadius: width * 0.35,
    borderWidth: 2,
    borderColor: "#6a6ffd",
    marginTop: 2.5,
  },
  input: {
    color: "#494dae",
    textAlign: "center",
    textAlignVertical: "center",
    height: 50,
    fontFamily: "Geomanist-Light",
  },
});
