import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IMAGE_WIDTH = 84,
  IMAGE_HEIGHT = 78;
const { width } = Dimensions.get("window");

export default function Friends({
  name,
  lvl,
  exp,
  avatar,
  friends,
  questions,
  prize,
  flag,
  navigation,
  isFriend,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.userContainer}
          onPress={() => {
            navigation.navigate("Profile", {
              name: name,
              lvl: lvl,
              exp: exp,
              avatar: avatar,
              friends: friends,
              questions: questions,
              prize: prize,
              flag: flag,
              avatar: avatar,
            });
          }}
        >
          <Image style={styles.avatar} source={avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.lvl}>{lvl} LVL</Text>
            <View style={styles.lvlBg}>
              <View style={[styles.lvlActive, { width: exp }]}></View>
            </View>
          </View>
        </TouchableOpacity>
        {isFriend ? (
          <TouchableOpacity style={styles.removeContainer}>
            <Text style={styles.removeText}>Arkadasliktan cikar</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.removeContainer, { marginRight: 10 }]}
            >
              <Text style={styles.removeText}>Kabul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeContainer}>
              <Text style={styles.removeText}>Ret</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    backgroundColor: "blue",
    marginVertical: 5,
    borderRadius: 40,
    backgroundColor: "#0c0e16",
    borderWidth: 1,
    borderColor: "#4a4eae",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  avatar: {
    width: IMAGE_WIDTH / 2,
    height: IMAGE_HEIGHT / 2,
  },
  name: {
    fontSize: 12,
    fontFamily: "Geomanist-Regular",
    color: "#fff",
  },
  lvl: {
    fontSize: 14,
    fontFamily: "Geomanist-Bold",
    color: "#393d86",
  },
  lvlBg: {
    height: 4,
    width: 72,
    backgroundColor: "#1b1e2b",
    borderRadius: 50,
  },
  lvlActive: {
    backgroundColor: "#393d86",
    height: 4,
    borderRadius: 50,
  },
  removeContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#f9ed30",
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    borderRadius: 50,
  },
  removeText: {
    fontSize: 9,
    color: "#0b0d15",
    fontFamily: "Spantaran",
    textTransform: "uppercase",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
  },
});
