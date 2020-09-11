import React, { useState } from "react";
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
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const TABS = [
  {
    title: "Gunluk",
    icon: <Entypo name="bookmarks" size={32} color="#fff" />,
    filters: ["Yerel", "Global"],
  },
  {
    title: "Haftalik",
    icon: <AntDesign name="star" size={32} color="#fff" />,
    filters: ["Yerel", "Global"],
  },
  {
    title: "Kazananlar",
    icon: <AntDesign name="Trophy" size={32} color="#fff" />,
  },
];

const RANKING = [
  {
    name: "Ayse DEMIR",
    avatar: require("../assets/winners/winner1.png"),
    flag: require("../assets/flags/tr.png"),
    date: "12.05.2020",
    prize: "IPHONE 11",
    exp: "42%",
  },
  {
    name: "Ayse DEMIR",
    avatar: require("../assets/winners/winner1.png"),
    flag: require("../assets/flags/tr.png"),
    date: "12.05.2020",
    prize: "IPHONE 11",
    exp: "88%",
  },
  {
    name: "Ayse DEMIR",
    avatar: require("../assets/winners/winner1.png"),
    flag: require("../assets/flags/tr.png"),
    date: "12.05.2020",
    prize: "IPHONE 11",
    exp: "33%",
  },
  {
    name: "Ayse DEMIR",
    avatar: require("../assets/winners/winner1.png"),
    flag: require("../assets/flags/tr.png"),
    date: "12.05.2020",
    prize: "IPHONE 11",
    exp: "77%",
  },
  {
    name: "Ayse DEMIR",
    avatar: require("../assets/winners/winner1.png"),
    flag: require("../assets/flags/tr.png"),
    date: "12.05.2020",
    prize: "IPHONE 11",
    exp: "55%",
  },
];

const DAILY = [
  {
    name: "Buse DEMIR",
    lvl: 12,
    exp: "24%",
    score: 2434,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/friends/friend1.png"),
  },
  {
    name: "Buse DEMIR",
    lvl: 12,
    exp: "24%",
    score: 2434,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/friends/friend1.png"),
  },
  {
    name: "Buse DEMIR",
    lvl: 12,
    exp: "24%",
    score: 2434,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/friends/friend1.png"),
  },
  {
    name: "Buse DEMIR",
    lvl: 12,
    exp: "24%",
    score: 2434,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/friends/friend1.png"),
  },
  {
    name: "Buse DEMIR",
    lvl: 12,
    exp: "24%",
    score: 2434,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/friends/friend1.png"),
  },
];

export default function Ranking({ navigation }) {
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
          <Text style={styles.title}>SIRALAMA</Text>
          <View style={styles.tabWrapper}>
            {TABS.map((item, indx) => (
              <TouchableOpacity
                key={indx}
                style={[
                  styles.tabContainer,
                  {
                    marginHorizontal: indx == 1 ? 10 : 0,
                    backgroundColor: indx == index ? "#6a6ffd" : "#0c0e17",
                  },
                ]}
                onPress={() => {
                  setIndex(indx);
                }}
              >
                {item.icon}
                <Text style={styles.tabTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {index == 2 ? (
            <View style={styles.rankingWrapper}>
              {RANKING.map((item, indx) => (
                <TouchableOpacity
                  key={indx}
                  style={styles.rankingContainer}
                  onPress={() => {
                    navigation.navigate("Profile", {
                      name: item.name,
                      avatar: item.avatar,
                      flag: item.flag,
                      exp: item.exp.slice(0, 2),
                    });
                  }}
                >
                  <Image style={styles.avatar} source={item.avatar} />
                  <Image
                    style={styles.flag}
                    source={item.flag}
                    resizeMode="contain"
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.prize}>{item.prize}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
          <View style={styles.filterContainer}>
            {index == 0 || 1 ? (
              <View style={styles.filterContainer}>
                {TABS[0].filters.map((item, index) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        index == filter ? "#0a0b12" : "transparent",
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      borderRadius: 24,
                    }}
                    onPress={() => {
                      setFilter(index);
                    }}
                    key={index}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        {
                          color: index == filter ? "#fff" : "#3f4293",
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>

          {DAILY.map((item, index) => (
            <View
              style={[
                styles.dailyContainer,
                {
                  transform: [{ scaleY: index > 2 ? 0.7 : 1 }],
                },
              ]}
            >
              <Text
                style={[
                  styles.rank,
                  {
                    color:
                      index == 0
                        ? "#f9ed30"
                        : index == 1
                        ? "#b7682e"
                        : index == 2
                        ? "#3d3d3d"
                        : "#6b70ff",
                  },
                ]}
              >
                {index + 1}.
              </Text>
              <TouchableOpacity
                style={styles.rankUserContainer}
                onPress={() => {
                  navigation.navigate("Profile", {
                    name: item.name,
                    avatar: item.avatar,
                    flag: item.flag,
                    lvl: item.lvl,
                    exp: item.exp.slice(0, 2),
                  });
                }}
              >
                <Image style={styles.rankAvatar} source={item.avatar} />
                <View style={styles.rankStatsContainer}>
                  <Text style={styles.rankName}>{item.name}</Text>
                  <Text style={styles.rankLvl}>{item.lvl} LVL</Text>
                  <View style={styles.rankProgressBg}>
                    <View
                      style={[styles.rankProgressActive, { width: item.exp }]}
                    ></View>
                  </View>
                </View>
                <Text style={styles.rankScore}>TOPLAM PUAN: {item.score}</Text>
                <Image source={item.flag} style={styles.rankFlag} />
              </TouchableOpacity>
            </View>
          ))}
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
  tabContainer: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#6a6ffd",
    borderRadius: 12,
    paddingVertical: 15,
  },
  tabWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabTitle: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Spantaran",
    marginTop: 10,
  },
  rankingWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  rankingContainer: {
    backgroundColor: "#0c0e16",
    paddingHorizontal: 30,
    margin: 5,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#6a6ffd",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 14,
    marginTop: 10,
  },
  flag: {
    width: 24,
    height: 15,
    marginVertical: 10,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
  },
  date: {
    fontSize: 10,
    fontFamily: "Geomanist-Regular",
    color: "#5e6ebb",
  },
  prize: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 10,
    fontFamily: "Geomanist-Bold",
    backgroundColor: "#f9ed30",
    marginTop: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  filterContainer: {
    width: 260,
    borderRadius: 50,
    backgroundColor: "#6a6ffd",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  dailyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  rank: {
    fontFamily: "Spantaran",
    paddingHorizontal: 7.5,
    backgroundColor: "#0c0e17",
    height: "100%",
    textAlignVertical: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6b70ff",
    fontSize: 16,
  },
  rankUserContainer: {
    backgroundColor: "#0c0e17",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6b70ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    width: 260,
  },
  rankAvatar: {
    width: 34,
    height: 34,
  },
  rankName: {
    fontSize: 12,
    fontFamily: "Geomanist-Medium",
    color: "#fff",
  },
  rankLvl: {
    fontSize: 14,
    fontFamily: "Geomanist-Bold",
    color: "#393d86",
  },
  rankProgressBg: {
    width: 40,
    backgroundColor: "#1b1e2b",
    height: 4,
    borderRadius: 50,
  },
  rankProgressActive: {
    backgroundColor: "#393d86",
    height: 4,
    borderRadius: 50,
  },
  rankScore: {
    fontSize: 12,
    fontFamily: "Geomanist-Regular",
    textTransform: "uppercase",
    color: "#383b82",
  },
  rankFlag: {
    height: 20,
    width: 30,
    borderRadius: 6,
  },
});
