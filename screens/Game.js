import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Game1 from "../components/game1";
import { ScrollView } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import Game2 from "../components/game2";
import Game3 from "../components/game3";
import Game4 from "../components/game4";

const { width, height } = Dimensions.get("window");

const PLAYERS = {
  player1: {
    name: "Buse Demir",
    score: 423,
    avatar: require("../assets/requests/request1.png"),
  },
  player2: {
    name: "Mustafa Oz",
    score: 132,
    avatar: require("../assets/requests/request1.png"),
  },
};

export default function Game() {
  const [sec, setSec] = useState(10);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      if (sec > 0) {
        setSec((prev) => prev - 1);
      }
      if (sec === 0) {
        if (index !== 3) {
          setIndex((prev) => prev + 1);
        } else {
          setIndex(0);
        }

        clearInterval(timer);

        setSec(3);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

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
          scrollEventThrottle={16}
          bounces={false}
          style={{
            width,
            height,
          }}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.headerContainer}>
            <View style={styles.userContainer}>
              <Image style={styles.avatar} source={PLAYERS.player1.avatar} />
              <View>
                <Text style={styles.playerText}>{PLAYERS.player1.name}</Text>
                <Text style={styles.playerScore}>{PLAYERS.player1.score}</Text>
              </View>
            </View>
            <View style={styles.secWrapper}>
              <Text style={styles.second}>{sec}</Text>
            </View>
            <View style={styles.userContainer}>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.playerText}>{PLAYERS.player2.name}</Text>
                <Text style={[styles.playerScore, { color: "#5b5b5b" }]}>
                  {PLAYERS.player2.score}
                </Text>
              </View>
              <Image style={styles.avatar} source={PLAYERS.player2.avatar} />
            </View>
          </View>
          {index == 0 ? (
            <Game1 />
          ) : index == 1 ? (
            <Game2 />
          ) : index == 2 ? (
            <Game3 />
          ) : (
            <Game4 />
          )}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  headerContainer: {
    width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#fff",
    marginHorizontal: 5,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerText: {
    fontSize: 12,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
  },
  playerScore: {
    fontSize: 14,
    fontFamily: "Geomanist-Black",
    color: "#6a6ffd",
  },
  secWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#0b0c15",
    borderWidth: 2,
    borderColor: "#f9ed30",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    fontSize: 20,
    fontFamily: "Geomanist-Medium",
    color: "#f9ed30",
  },
});
