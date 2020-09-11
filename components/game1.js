import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Easing } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const imgSource = require("../assets/game/game1.png");
const SCORE = {
  right: 7,
  wrong: 3,
};

const qNum = 9,
  question = "Can you name the first ever Premier League Team of the Year?";

const ANSWERS = [
  {
    answer: "Goalkeeper",
    case: "A",
  },
  {
    answer: "Defender",
    isTrue: true,
    case: "B",
  },
  {
    answer: "Midfielder",
    case: "C",
  },
  {
    answer: "Striker",
    case: "D",
  },
];

const WILDCARDS = ["x2", "PASS", "1/2"];

export default function Game1() {
  const bgAnimate = new Animated.Value(0);

  return (
    <View>
      <Image style={styles.gameImg} source={imgSource} />
      <View style={styles.progressContainer}>
        <View style={[styles.progressRight, { flex: SCORE.right }]} />
        <View style={[styles.progressWrong, { flex: SCORE.wrong }]} />
      </View>
      <Text style={styles.qNum}>{qNum}. SORU</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.answerWrapper}>
        {ANSWERS.map((item, index) => {
          const bgAnimationTrue = bgAnimate.interpolate({
            inputRange: [
              0,
              /*
              0.2, 0.4, 0.6, 0.8,
              */
              1,
            ],
            outputRange: [
              "#6a6ffd",
              /*
              "#5E90C1",
              "#59A0A3",
              "#53B085",
              "#4DC167",
              */
              "#47D149",
            ],
          });

          const bgAnimationWrong = bgAnimate.interpolate({
            inputRange: [
              0,
              /*
              0.2, 0.4, 0.6, 0.8,
              */
              1,
            ],
            outputRange: [
              "#6a6ffd",
              /*
              "#8C4FB3",
              "#9D3F8F",
              "#AD2E6A",
              "#BE1E45",
              */
              "#CF0E20",
            ],
          });

          return (
            <TouchableOpacity
              onPress={() => {
                Animated.timing(bgAnimate, {
                  toValue: 1,
                  duration: 222,
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
                    backgroundColor: item.isTrue
                      ? bgAnimationTrue
                      : bgAnimationWrong,
                  },
                ]}
              >
                <Text style={styles.answerCase}>{item.case}</Text>
                <Text style={styles.answerText}>{item.answer}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.wildcardWrapper}>
        {WILDCARDS.map((item, index) => (
          <TouchableOpacity key={index} style={styles.wildcardCotnainer}>
            <Text style={styles.wildcardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameImg: {
    width: width,
    height: width / 2,
  },
  progressContainer: {
    width,
    height: 14,
    flexDirection: "row",
    elevation: 5,
    zIndex: 5,
  },
  progressRight: {
    backgroundColor: "#47d049",
  },
  progressWrong: {
    backgroundColor: "#cf0e20",
  },
  qNum: {
    fontSize: 16,
    fontFamily: "Geomanist-Medium",
    color: "#6a6ffd",
    paddingVertical: 5,
    paddingHorizontal: 20,
    textTransform: "uppercase",
    backgroundColor: "#0b0d15",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderColor: "#6a6ffd",
    borderWidth: 1,
    borderTopWidth: 0,
    alignSelf: "center",
  },
  question: {
    width: width * 0.6,
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
  answerContainer: {
    width: width * 0.4,
    height: width * 0.2,
    margin: width * 0.01,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    elevation: 5,
    zIndex: 5,
    position: "relative",
  },
  answerText: {
    fontSize: 16,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
  },
  answerWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  answerCase: {
    fontSize: 10,
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    fontFamily: "Geomanist-Medium",
  },
  wildcardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  wildcardCotnainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b0c14",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#595dd2",
    marginHorizontal: 5,
    elevation: 5,
    zIndex: 5,
  },
  wildcardText: {
    fontFamily: "Spantaran",
    fontSize: 14,
    color: "#fff",
  },
});
