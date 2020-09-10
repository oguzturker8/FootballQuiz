import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Record({ text, record, isMiddle }) {
  return (
    <View
      style={[
        styles.container,
        {
          borderLeftWidth: isMiddle ? 2 : 0,
          borderRightWidth: isMiddle ? 2 : 0,
          borderColor: isMiddle ? "#6a6ffd" : null,
          marginHorizontal: isMiddle ? 15 : null,
          paddingHorizontal: isMiddle ? 15 : null,
        },
      ]}
    >
      <Text style={styles.record}>{record ? record : "N/A"}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  record: {
    fontSize: 16,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
  },
  text: {
    fontSize: 10,
    fontFamily: "Geomanist-Light",
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 5,
  },
});
