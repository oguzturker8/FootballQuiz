import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Animated, { Easing } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Quest({ title, expiration, reward, current, total }) {
  const animatedWidth = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: Math.round((width * 0.9 - 4) * (current / total)),
      easing: Easing.linear,
      duration: 666,
      delay: 222,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.statusBg}>
          <View style={styles.status}></View>
        </View>
        <View style={styles.questContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.expiration} numberOfLines={1}>
            tarihine kadar gecerli: {expiration}
          </Text>
        </View>
        <View style={styles.rewardContainer}>
          <Text style={styles.reward}>{reward}</Text>
          <SimpleLineIcons name="diamond" size={14} color="#d6cc2c" />
        </View>
      </View>
      <Animated.View
        style={[
          styles.bottomContainer,
          {
            backgroundColor: current == total ? "#f9ed30" : "#6a6ffd",
            width:
              current == total
                ? (width * 0.9 - 4) * (current / total)
                : animatedWidth,
            borderBottomRightRadius: current == total ? 6 : 0,
          },
        ]}
      />
      <Text
        style={[
          styles.progress,
          {
            color: current == total ? "#0a0c13" : "#fff",
          },
        ]}
      >
        {current == total ? "TAMAMLANDI" : current + "/" + total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "#6a6ffd",
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "#0b0d16",
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 5,
    backgroundColor: "#0b0d16",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingBottom: 10,
  },
  title: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    textTransform: "uppercase",
  },
  expiration: {
    fontSize: 10,
    fontFamily: "Geomanist-Regular",
    color: "#373f67",
    textTransform: "uppercase",
  },
  statusBg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f9ed30",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  reward: {
    fontSize: 14,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
    marginRight: 7.5,
  },
  rewardContainer: {
    height: 40,
    width: 80,
    borderRadius: 24,
    backgroundColor: "#0b0d16",
    borderWidth: 2,
    borderColor: "#151826",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  questContainer: {
    height: 35,
    justifyContent: "center",
    width: width * 0.8 - 120,
  },
  bottomContainer: {
    alignSelf: "flex-start",
    height: 25,
    borderBottomLeftRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  progress: {
    fontSize: 12,
    fontFamily: "Geomanist-Medium",
    position: "absolute",
    bottom: 5,
  },
});
