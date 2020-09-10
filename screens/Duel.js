import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import Back from "../components/back";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const Friends = [
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    avatar: require("../assets/requests/request1.png"),
  },
];

export default function Duel({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{
          width,
          height,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        source={require("../assets/loginbg.png")}
        resizeMode="stretch"
      >
        <Back navigation={navigation} />

        <Text style={styles.title}>DUELLO AC</Text>
        <TouchableOpacity style={styles.categoryContainer}>
          <Ionicons
            name="ios-arrow-down"
            size={20}
            color="#fff"
            style={{ flex: 1 }}
          />
          <Text style={styles.categoryText}>kategori sec</Text>
        </TouchableOpacity>
        <View style={styles.friendsContainer}>
          <Text style={styles.friendsText}>online arkadaslarin</Text>
          <ScrollView
            style={{
              paddingHorizontal: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
          >
            {Friends.map((item, index) => (
              <View
                key={index}
                style={{
                  marginHorizontal: 10,
                  marginVertical: 25,
                }}
              >
                <View style={styles.avatarContainer}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <View style={styles.lvlContainer}>
                    <Text style={styles.lvl}>{item.lvl}</Text>
                  </View>
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Game");
                  }}
                >
                  <Text style={styles.send}>DUELLO YOLLA</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity>
          <Text style={styles.create}>KUR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: "Spantaran",
    color: "#6a6ffd",
    marginTop: 70,
    marginBottom: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  categoryContainer: {
    width: "60%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#6a6ffd",
    borderRadius: 50,
    marginVertical: 30,
  },
  categoryText: {
    flex: 4,
    textAlign: "center",
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "Geomanist-Medium",
  },
  friendsContainer: {
    marginVertical: 25,
    height: 180,
  },
  friendsText: {
    color: "#6a6ffd",
    textTransform: "uppercase",
    fontSize: 10,
    fontFamily: "Geomanist-Medium",
    textAlign: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#6873f4",
  },
  avatarContainer: {
    position: "relative",
    height: 90,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lvlContainer: {
    position: "absolute",
    bottom: 0,
    width: 80,
  },
  lvl: {
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 7.5,
    backgroundColor: "#6873f4",
    borderRadius: 50,
  },
  name: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    textAlign: "center",
    marginVertical: 5,
  },
  send: {
    color: "#fff",
    fontSize: 8,
    fontFamily: "Geomanist-Medium",
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    backgroundColor: "#6873f4",
    alignSelf: "center",
    borderRadius: 4,
  },
  create: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 75,
    paddingVertical: 15,
    backgroundColor: "#6a6ffd",
    borderRadius: 50,
    marginTop: 15,
    fontFamily: "Spantaran",
  },
});
