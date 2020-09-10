import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Games({ name, league, lvl, avatar, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={() => {
          navigation.navigate("Profile", {
            name: name,
            lvl: lvl,
            avatar: avatar,
          });
        }}
      >
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.lvlContainer}>
          <Text style={styles.lvl}>{lvl}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.league}>{league}</Text>
      <TouchableOpacity>
        <Text style={styles.accept}>Kabul Et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c0e17",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#4245ad",
    marginHorizontal: 5,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "#6873f4",
  },
  lvlContainer: {
    position: "absolute",
    bottom: -5,
    width: 80,
  },
  lvl: {
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
    textAlign: "center",
    alignSelf: "center",
    paddingHorizontal: 7.5,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#6873f4",
  },
  name: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Geomanist-Medium",
    marginTop: 10,
  },
  league: {
    textTransform: "uppercase",
    fontSize: 8,
    fontFamily: "Geomanist-Regular",
    color: "#6a6ffd",
    marginTop: 2.5,
  },
  accept: {
    fontSize: 8,
    textTransform: "uppercase",
    fontFamily: "Geomanist-Medium",
    color: "#fff",
    backgroundColor: "#6873f4",
    paddingHorizontal: 10,
    borderRadius: 6,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
