import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FriendsTab from "../components/friendstab";
import Friend from "../components/friends";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const INVITE = 2;
const Tabs = [
  {
    title: "Arkadaslar",
    icon: <AntDesign name="team" size={32} color="#fff" />,
    index: 0,
    filters: ["Hepsi", "Cevrimici", "Cevrimdisi"],
  },
  {
    title: "Istekler",
    icon: <Feather name="user-plus" size={32} color="#fff" />,
    index: 1,
    filters: ["Tumu"],
  },
  {
    title: "Davet At",
    icon: <AntDesign name="mail" size={32} color="#fff" />,
    index: 2,
    filters: [],
  },
  {
    title: "Ara",
    icon: <FontAwesome name="search" size={32} color="#fff" />,
    index: 3,
    filters: [],
  },
];

const FriendList = [
  {
    name: "Mustafa Ozdemir",
    lvl: 12,
    exp: "45%",
    avatar: require("../assets/friends/friend1.png"),
    isOnline: true,
    friends: 34,
    questions: 322,
    prize: 2,
    flag: require("../assets/flags/tr.png"),
  },
  {
    name: "Buse Yildirim",
    lvl: 34,
    exp: "84%",
    avatar: require("../assets/friends/friend2.png"),
    isOnline: true,
    friends: 12,
    questions: 103,
    prize: 0,
    flag: require("../assets/flags/tr.png"),
  },
  {
    name: "Semih Aydogan",
    lvl: 32,
    exp: "22%",
    avatar: require("../assets/friends/friend3.png"),
    isOnline: false,
    friends: 109,
    questions: 1449,
    prize: 21,
    flag: require("../assets/flags/tr.png"),
  },
];

const FriendRequests = [
  {
    name: "Mustafa Aydogan",
    lvl: 22,
    friends: 34,
    questions: 322,
    prize: 2,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/requests/request1.png"),
  },
  {
    name: "Mustafa Aydogan",
    lvl: 11,
    friends: 11,
    questions: 111,
    prize: 1,
    flag: require("../assets/flags/tr.png"),
    avatar: require("../assets/requests/request1.png"),
  },
];

export default function Friends({ navigation }) {
  const [indx, setIndx] = useState(0);
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
        <View style={styles.headerContainer}>
          {INVITE > 0 ? <Text style={styles.invite}>{INVITE}</Text> : null}
          {Tabs.map((item) => (
            <FriendsTab
              title={item.title}
              icon={item.icon}
              key={item.index}
              index={item.index}
              state={indx}
              setState={setIndx}
              setFilter={setFilter}
              invite={INVITE}
            />
          ))}
        </View>
        <View style={styles.filterContainer}>
          {Tabs[indx].filters.map((item, index) => (
            <TouchableOpacity
              style={{
                backgroundColor: index == filter ? "#0a0b12" : "transparent",
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
        {indx == 0 ? (
          <View style={{ marginTop: 20 }}>
            {FriendList.map((item, index) => {
              if (filter == 0) {
                return (
                  <Friend
                    name={item.name}
                    lvl={item.lvl}
                    avatar={item.avatar}
                    key={index}
                    navigation={navigation}
                    prize={item.prize}
                    questions={item.questions}
                    friends={item.friends}
                    flag={item.flag}
                    isFriend={true}
                  />
                );
              } else if (filter == 1) {
                if (item.isOnline) {
                  return (
                    <Friend
                      name={item.name}
                      lvl={item.lvl}
                      avatar={item.avatar}
                      key={index}
                      navigation={navigation}
                      prize={item.prize}
                      questions={item.questions}
                      friends={item.friends}
                      flag={item.flag}
                      isFriend={true}
                    />
                  );
                }
              } else {
                if (!item.isOnline) {
                  return (
                    <Friend
                      name={item.name}
                      lvl={item.lvl}
                      avatar={item.avatar}
                      key={index}
                      navigation={navigation}
                      prize={item.prize}
                      questions={item.questions}
                      friends={item.friends}
                      flag={item.flag}
                      isFriend={true}
                    />
                  );
                }
              }
            })}
          </View>
        ) : null}

        {indx == 1 ? (
          <View style={{ marginTop: 20 }}>
            {FriendRequests.map((item, index) => (
              <Friend
                name={item.name}
                lvl={item.lvl}
                avatar={item.avatar}
                key={index}
                navigation={navigation}
                prize={item.prize}
                questions={item.questions}
                friends={item.friends}
                flag={item.flag}
                isFriend={false}
              />
            ))}
          </View>
        ) : null}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  filterContainer: {
    backgroundColor: "blue",
    width: (width * 0.9) / 1.15 + 24,
    borderRadius: 50,
    backgroundColor: "#6a6ffd",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    fontSize: 12,
    fontFamily: "Geomanist-Medium",
    textTransform: "uppercase",
  },
  invite: {
    backgroundColor: "#f9ed30",
    color: "#3b3919",
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 50,
    position: "absolute",
    top: -8,
    left: (width * 0.9) / 2.7,
    zIndex: 5,
    elevation: 5,
  },
});
