import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function SocialButton({ type }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            type == "f" ? "#1c74e8" : type == "t" ? "#12ccf4" : "#f41727",
          marginHorizontal: type == "t" ? 10 : 0,
        },
      ]}
    >
      <EvilIcons
        name={
          type == "f"
            ? "sc-facebook"
            : type == "t"
            ? "sc-twitter"
            : "sc-google-plus"
        }
        size={34}
        color="#fff"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: (width * 0.65 - 30) / 3,
    height: 50,
    borderRadius: (width * 0.65 - 30) / 6,
  },
});
