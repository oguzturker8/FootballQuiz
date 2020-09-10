import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Back({ navigation }) {
  return (
    <View style={styles.backContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color="#6e717a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141827",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  backContainer: {
    position: "absolute",
    zIndex: 5,
    elevation: 5,
    left: 35,
    top: 15,
  },
});
