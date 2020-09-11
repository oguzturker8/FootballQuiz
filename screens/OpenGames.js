import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Back from "../components/back";

import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FriendsTab from "../components/friendstab";
import Games from "../components/games";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const GAMES = [
  {
    type: "Local",
    title: "Yerel",
    icon: <MaterialIcons name="location-on" size={32} color="#fff" />,
  },
  {
    type: "Global",
    title: "GLOBAL",
    icon: <Fontisto name="world-o" size={32} color="#fff" />,
  },
  {
    type: "Duel",
    title: "Duello Ac",
    icon: <MaterialCommunityIcons name="sword-cross" size={32} color="#fff" />,
  },
];

const Players = [
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: true,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
  {
    name: "Mustafa Aydogan",
    lvl: 32,
    league: "Sampiyonlar ligi",
    avatar: require("../assets/requests/request1.png"),
    isLocal: false,
  },
];

export default function OpenGames({ navigation }) {
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState(0);

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
        <ScrollView
          style={{
            width,
            height,
          }}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Back navigation={navigation} />
          <Text style={styles.title}>ACIK OYUNLAR</Text>
          <View style={styles.barContainer}>
            {GAMES.map((item, indx) => (
              <FriendsTab
                title={item.title}
                icon={item.icon}
                index={indx}
                state={index}
                setState={setIndex}
                key={indx}
                isDuel={indx != 2 ? false : true}
                navigation={navigation}
                setFilter={setFilter}
              />
            ))}
          </View>

          <View style={styles.gamesCointainer}>
            {index == 0
              ? Players.filter((item) => {
                  return item.isLocal;
                }).map((item, indx) => (
                  <Games
                    name={item.name}
                    lvl={item.lvl}
                    league={item.league}
                    avatar={item.avatar}
                    key={indx}
                    navigation={navigation}
                  />
                ))
              : index == 1
              ? Players.filter((item) => {
                  return !item.isLocal;
                }).map((item, indx) => (
                  <Games
                    name={item.name}
                    lvl={item.lvl}
                    league={item.league}
                    avatar={item.avatar}
                    key={indx}
                    navigation={navigation}
                  />
                ))
              : null}
          </View>
        </ScrollView>
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
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  gamesCointainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
