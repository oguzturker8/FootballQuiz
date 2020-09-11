import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Record from "../components/record";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../components/back";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const { width, height } = Dimensions.get("window");

export default function Profile({ route, navigation }) {
  const {
    name,
    lvl,
    friends,
    questions,
    prize,
    flag,
    avatar,
    isFriend,
    exp,
  } = route.params;

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
        <AnimatedCircularProgress
          size={width / 3}
          width={5}
          fill={exp || 100}
          tintColor="#6a6ffd"
          onAnimationComplete={() => {}}
          backgroundColor="#1b1e2b"
          style={{
            position: "absolute",
            zIndex: 5,
            elevation: 5,
            top: height / 5 + 30,
          }}
        ></AnimatedCircularProgress>
        <Image style={styles.flag} source={flag} />
        <View style={styles.profileContainer}>
          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.lvl}>{lvl ? lvl : "N/A"}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.recordsContainer}>
          <Record record={friends} text="arkadaslar" />
          <Record record={questions} text="bildigi soru" isMiddle />
          <Record record={prize} text="aldigi odul" />
        </View>
        {!isFriend ? (
          <TouchableOpacity>
            <Text style={styles.addText}>ARKADAS EKLE</Text>
          </TouchableOpacity>
        ) : null}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flag: {
    height: 20,
    width: 35,
    borderRadius: 6,
    marginTop: height / 5,
  },
  avatar: {
    height: width / 3,
    width: width / 3,
    borderRadius: width / 6,
    marginVertical: 10,
  },
  lvl: {
    fontSize: 18,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 12.5,
    backgroundColor: "#6a6ffd",
    borderRadius: 50,
    elevation: 6,
    zIndex: 6,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  name: {
    fontSize: 18,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
    marginVertical: 15,
  },
  recordsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#0c0e17",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  addText: {
    color: "#000",
    fontFamily: "Geomanist-Medium",
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f9ed30",
    borderRadius: 50,
    marginVertical: 15,
  },
});
