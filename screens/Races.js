import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import Back from "../components/back";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const RACES = [
  {
    title: "Dunya Sampiyonasi",
    user: 5234,
    image: require("../assets/races/race1.png"),
  },
  {
    title: "Avrupa Sampiyonasi",
    user: 1232,
    image: require("../assets/races/race2.png"),
  },
  {
    title: "Lig Sampiyonasi",
    user: 412,
    image: require("../assets/races/race3.png"),
  },
];

export default function Races({ navigation }) {
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
        <Text style={styles.title}>YARISMA SEC</Text>
        {RACES.map((item, index) => (
          <TouchableOpacity
            style={styles.raceContainer}
            key={index}
            onPress={() => {
              navigation.navigate("Game");
            }}
          >
            <View style={styles.userContainer}>
              <FontAwesome name="user" size={14} color="black" />
              <Text style={styles.user}>{item.user}</Text>
            </View>
            <Image
              style={styles.raceImage}
              source={item.image}
              resizeMode="contain"
            />
            <Text style={styles.header}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.duelContainer}
          onPress={() => {
            navigation.navigate("Duel");
          }}
        >
          <View style={styles.iconBg}>
            <MaterialCommunityIcons
              name="sword-cross"
              size={24}
              color="#6f74fd"
            />
          </View>
          <Text style={styles.duelText}>Duello</Text>
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
  },
  raceContainer: {
    width: width * 0.8,
    backgroundColor: "#151429",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#6e6bff",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
  },
  raceImage: {
    width: width * 0.3,
    height: width * 0.2,
  },
  header: {
    width: width * 0.4,
    fontSize: 24,
    fontFamily: "Spantaran",
    color: "#fff",
    textAlign: "center",
  },
  user: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Geomanist-Bold",
    marginLeft: 5,
  },
  userContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#6a6ffd",
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  duelContainer: {
    width: width * 0.8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6a6ffd",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 7.5,
    marginTop: 15,
  },
  duelText: {
    fontFamily: "Spantaran",
    color: "#fff",
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  iconBg: {
    paddingVertical: 5,
    paddingHorizontal: 7.5,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
});
