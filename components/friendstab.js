import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = (width * 0.9) / 4.6,
  ITEM_HEIGHT = (width * 0.9) / 4.6 + 12.5;

export default function FriendsTab({
  title,
  icon,
  index,
  state,
  setState,
  setFilter,
  isDuel,
  navigation,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: state == index ? "#6a6ffd" : "#0c0e17" },
      ]}
      onPress={() => {
        if (isDuel && state == index) {
          if (state == index) {
            setState(index);
            setFilter(0);
          } else {
            navigation.navigate("Duel");
          }
        }
      }}
    >
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6a6ffd",
    borderRadius: 16,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 11,
    color: "#fff",
    fontFamily: "Spantaran",
    textTransform: "capitalize", //Uppercase sigmiyor
    marginVertical: 10,
  },
});
