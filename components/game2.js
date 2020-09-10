import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Easing } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const imgSource = require("../assets/game/game2.png");

const qNum = 10,
  question = "Can you name the first ever Premier League Team of the Year?";

const WILDCARDS = ["x2", "PASS", "1/2"];

const ANSWERS = [
  {
    answer: "Goalkeeper",
  },
  {
    answer: "Goalkeeper",
  },
  {
    answer: "Goalkeeper",
    isTrue: true,
  },
  {
    answer: "Goalkeeper",
  },
];

export default function Game2() {
  const bgAnimate = new Animated.Value(0);

  return (
    <View>
      <Image style={styles.gameImg} source={imgSource} />
      <Text style={styles.qNum}>{qNum}. SORU</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.wildcardsWrapper}>
        {WILDCARDS.map((item, index) => (
          <TouchableOpacity key={index} style={styles.wildcardContainer}>
            <Text style={styles.wildcardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginBottom: 25 }}>
        {ANSWERS.map((item, index) => {
          const bgAnimationTrue = bgAnimate.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [
              "#0b0d15",
              "#17341F",
              "#235B2A",
              "#2F8334",
              "#3BAA3F",
              "#47D149",
            ],
          });

          const bgAnimationWrong = bgAnimate.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [
              "#0b0d15",
              "#320D17",
              "#590D19",
              "#810E1C",
              "#A80E1E",
              "#CF0E20",
            ],
          });

          const borderAnimation = bgAnimate.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [
              "#6a6ffd",
              "#5E90C1",
              "#59A0A3",
              "#53B085",
              "#4DC167",
              "#47D149",
            ],
          });

          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                Animated.timing(bgAnimate, {
                  toValue: 1,
                  duration: 444,
                  easing: Easing.linear,
                  //useNativeDriver: true,
                }).start();
              }}
              key={index}
            >
              <Animated.View
                style={[
                  styles.answerContainer,
                  {
                    backgroundColor: item.isTrue ? bgAnimationTrue : "#0b0d15", // ya dA bgAnimationWrong
                    borderColor: item.isTrue ? borderAnimation : "#6a6ffd",
                  },
                ]}
              >
                <Text style={styles.answerText}>{item.answer}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameImg: {
    width: width / 2,
    height: (width / 2) * 0.9,
    alignSelf: "center",
  },
  qNum: {
    fontSize: 16,
    fontFamily: "Geomanist-Medium",
    color: "#6a6ffd",
    paddingVertical: 8,
    paddingHorizontal: 20,
    textTransform: "uppercase",
    backgroundColor: "#0b0d15",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderColor: "#6a6ffd",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: "center",
    marginTop: -10,
  },
  question: {
    width: width * 0.7,
    fontSize: 24,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
    letterSpacing: 0.2,
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 10,
    textShadowColor: "rgba(106, 111, 253, 0.81)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 29,
    lineHeight: 32,
  },
  wildcardsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  wildcardContainer: {
    width: 54,
    height: 58,
    borderRadius: 12,
    backgroundColor: "#6a6ffd",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  wildcardText: {
    fontSize: 18,
    fontFamily: "Spantaran",
    color: "#fff",
    elevation: 5,
    zIndex: 5,
  },
  answerContainer: {
    width: width * 0.7,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginVertical: 2.5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6a6ffd",
  },
  answerText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#fff",
    fontFamily: "Geomanist-Medium",
  },
});
