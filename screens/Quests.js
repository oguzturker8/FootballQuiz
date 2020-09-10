import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Quest from "../components/quest";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Back from "../components/back";

const { width, height } = Dimensions.get("window");

const QuestList = [
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 14,
    total: 14,
  },
  {
    title: "7 GUNDE 24 GALIBIYET AL",
    expiration: "14.07.2020",
    reward: 322,
    current: 7,
    total: 7,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 7,
    total: 14,
  },
  {
    title: "7 GUNDE 24 GALIBIYET AL",
    expiration: "14.07.2020",
    reward: 134,
    current: 19,
    total: 24,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 7,
    total: 14,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 4,
    total: 32,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 11,
    total: 14,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 23,
    total: 55,
  },
  {
    title: "1 GUN ICINDE 14 SORUYU ARD ARDA BIL",
    expiration: "12.05.2020",
    reward: 322,
    current: 1,
    total: 4,
  },
];

const ITEM_SIZE = 94; //+10margin

export default function Quests({ navigation }) {
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
          <Back navigation={navigation} />
          <Text style={styles.title}>GOREVLER</Text>
          <Text style={styles.header}>TAMAMLANANLAR</Text>
          {QuestList.filter((item) => {
            return item.current == item.total;
          }).map((item, index) => {
            return (
              <Quest
                title={item.title}
                expiration={item.expiration}
                reward={item.reward}
                current={item.current}
                total={item.total}
                key={index}
              />
            );
          })}
          <Text style={[styles.header, { marginTop: 20 }]}>YENILER</Text>
          {QuestList.filter((item) => {
            return item.current != item.total;
          }).map((item, index) => {
            return (
              <Quest
                title={item.title}
                expiration={item.expiration}
                reward={item.reward}
                current={item.current}
                total={item.total}
                key={
                  index +
                  QuestList.filter((item) => {
                    return item.current == item.total;
                  }).length
                }
              />
            );
          })}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "Spantaran",
    color: "#6a6ffd",
    marginTop: 70,
    marginBottom: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  header: {
    fontSize: 16,
    fontFamily: "Spantaran",
    color: "#FFF",
    marginVertical: 5,
    textTransform: "uppercase",
  },
});
