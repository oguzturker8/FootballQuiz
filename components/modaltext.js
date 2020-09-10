import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ModalText({ title, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: "#595dd5",
    backgroundColor: "#4245ad",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "Geomanist-Medium",
    textTransform: "capitalize",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    fontFamily: "Geomanist-Light",
    color: "#fff",
    textAlign: "center",
  },
});
