import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Easing } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const qNum = 12,
  question = "Can you name the first ever Premier League Team of the Year?";

const WILDCARDS = ["x2", "PASS", "1/2"];

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

const SCORE = {
  right: 7,
  wrong: 3,
};

export default function Game4() {
  const bgAnimate = new Animated.Value(0);
  return (
    <View>
      <View style={styles.progressContainer}>
        <View style={[styles.progressRight, { flex: SCORE.right }]} />
        <View style={[styles.progressWrong, { flex: SCORE.wrong }]} />
      </View>
      <Text style={styles.qNum}>{qNum}. SORU</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.answerWrapper}>
        {ANSWERS.map((item, index) => {
          const bgAnimationTrue = bgAnimate.interpolate({
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

          const bgAnimationWrong = bgAnimate.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [
              "#6a6ffd",
              "#8C4FB3",
              "#9D3F8F",
              "#AD2E6A",
              "#BE1E45",
              "#CF0E20",
            ],
          });

          return (
            <TouchableOpacity
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
    borderWidth: 1.5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: "center",
  },
  question: {
    width: width * 0.7,
    fontSize: 24,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
    letterSpacing: 0.2,
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 50,
    textShadowColor: "rgba(106, 111, 253, 0.81)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 29,
    lineHeight: 32,
  },
  progressContainer: {
    width,
    height: 14,
    flexDirection: "row",
    elevation: 5,
    zIndex: 5,
    marginBottom: 25,
  },
  progressRight: {
    backgroundColor: "#47d049",
  },
  progressWrong: {
    backgroundColor: "#cf0e20",
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
