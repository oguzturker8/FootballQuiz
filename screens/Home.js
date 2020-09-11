import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  TouchableNativeFeedback,
  Picker,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
//icons
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Settings from "../components/settings";
import ModalText from "../components/modaltext";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const USERNAME = "Buse DEMIR",
  LVL = 12,
  IMAGE_WIDTH = 84,
  IMAGE_HEIGHT = 78,
  GEM = 5432,
  EXP = "46%",
  isNotified = false;

const CAROUSEL = [
  {
    key: 1,
    title: "Gorevler",
    icon: <FontAwesome5 name="list-alt" size={32} color="#dcd22b" />,
    direction: "Quests",
  },
  {
    key: 2,
    title: "Magaza",
    icon: (
      <MaterialIcons name="local-grocery-store" size={32} color="#dcd22b" />
    ),
    direction: "Store",
  },
  {
    key: 3,
    title: "Arkadaslar",
    icon: <AntDesign name="team" size={32} color="#dcd22b" />,
    direction: "Friends",
  },
  {
    key: 4,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 5,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 6,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 7,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 8,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 9,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 10,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 11,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
  {
    key: 3,
    title: "Siralama",
    icon: <AntDesign name="Trophy" size={32} color="#dcd22b" />,
    direction: "Ranking",
  },
];

const Help = [
  {
    title: "Football Quiz Nasil Oynanir",
    text:
      "Iskambil kagitlari ile oynanan bir kagit turudur. Toplamda 52 kagittan olusan iskambil destesiyle oynanir. Oyundaki temel mantik iki kagidin rakam degerinin ayni olmasina dayanir. Yani ayni rakam ve turune sahip kagitlar pisti kabul edilmektedir.",
  },
  {
    title: "Deneme Baslik baslik",
    text:
      "Iskambil kagitlari ile oynanan bir kagit turudur. Toplamda 52 kagittan olusan iskambil destesiyle oynanir.",
  },
  {
    title: "Deneme Baslik baslik",
    text:
      "Iskambil kagitlari ile oynanan bir kagit turudur. Toplamda 52 kagittan olusan iskambil destesiyle oynanir.",
  },
];

const ITEM_GAP = width / 5 + width * 0.04;

export default function Home({ navigation }) {
  const scrollX = new Animated.Value(0);
  const [settings, setSettings] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);

  const [username, setUserName] = useState(USERNAME);
  const [newName, setNewName] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState(pass);
  const [country, setCountry] = useState("Turkiye");
  const [newCountry, setNewCountry] = useState(country);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{
          width,
          height,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        source={require("../assets/loginbg.png")}
        resizeMode="stretch"
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftContainer}>
            <View style={styles.avatarBorder}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatar.png")}
              />
            </View>
            <View style={styles.headerUserContainer}>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.userlvl}>{LVL} LVL</Text>
              <View style={styles.lvlbarBg}>
                <View style={styles.lvlbarActive}></View>
              </View>
            </View>
          </View>
          <View style={styles.headerRightContainer}>
            <View style={styles.gemContainer}>
              <Text style={styles.gem}>{GEM}</Text>
              <SimpleLineIcons name="diamond" size={16} color="#d6cc2c" />
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-notifications" size={24} color="#6f7179" />
              {!isNotified ? <View style={styles.dot} /> : null}
            </View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setHelp(true);
              }}
            >
              <MaterialCommunityIcons
                name="frequently-asked-questions"
                size={24}
                color="#6f7179"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setSettings(true);
              }}
            >
              <Ionicons name="ios-settings" size={24} color="#6f7179" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.prize}
            source={require("../assets/phone.png")}
            resizeMode="contain"
          />
          <Text style={styles.prizeText}>HAFTANIN ODULU - IPHONE 11</Text>
          <View style={styles.raceContainer}>
            <TouchableOpacity
              style={styles.raceButton}
              onPress={() => navigation.navigate("OpenGames")}
            >
              <Text style={styles.raceText}>RASTGELE YARIS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.raceButton}
              onPress={() => navigation.navigate("Races")}
            >
              <Text style={styles.raceText}>YARISMA SEC</Text>
            </TouchableOpacity>
          </View>
          <Animated.ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            bounces={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
            style={{
              flexDirection: "row",
              flex: 1,
            }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            {CAROUSEL.map((item, index) => {
              const inputRange = [
                (index - 2) * ITEM_GAP,
                (index - 1) * ITEM_GAP,
                index * ITEM_GAP,
                (index + 1) * ITEM_GAP,
                (index + 2) * ITEM_GAP,
              ];

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [15, 7.5, 0, 7.5, 15],
              });

              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.direction);
                  }}
                >
                  <Animated.View
                    style={[
                      styles.itemContainer,
                      {
                        transform: [{ translateY }],
                        marginLeft:
                          index == 0 ? (width - width / 5) / 2 : width * 0.04,
                        marginRight:
                          index == CAROUSEL.length - 1
                            ? (width - width / 5) / 2
                            : width * 0.04,
                      },
                    ]}
                    key={index}
                  >
                    {item.icon}
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </Animated.View>
                </TouchableOpacity>
              );
            })}
          </Animated.ScrollView>
        </View>
      </ImageBackground>
      <Modal animationType="none" transparent={true} visible={settings}>
        <TouchableNativeFeedback
          onPress={() => {
            setSettings(false);
          }}
        >
          <Text style={styles.modalX}>X</Text>
        </TouchableNativeFeedback>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Ayarlar</Text>
          <Settings
            text="Profil"
            setProfile={setProfile}
            isProfile
            setSettings={setSettings}
          />
          <Settings text="Arkadaşlık tekliflerine izin ver" />
          <Settings text="Ses" />
          <Settings text="Titreşim" />
          <Settings text="Arkadaşlık tekliflerine izin ver" />
        </View>
      </Modal>

      <Modal animationType="none" transparent={true} visible={help}>
        <TouchableNativeFeedback
          onPress={() => {
            setHelp(false);
          }}
        >
          <Text style={styles.modalX}>X</Text>
        </TouchableNativeFeedback>
        <View
          style={[
            styles.settingsContainer,
            { borderWidth: 0, paddingHorizontal: 5 },
          ]}
        >
          <Text style={styles.settingsTitle}>Soru ve Cevaplar</Text>
          {Help.map((item, index) => (
            <ModalText title={item.title} text={item.text} key={index} />
          ))}
        </View>
      </Modal>

      <Modal animationType="none" transparent={true} visible={profile}>
        <TouchableNativeFeedback
          onPress={() => {
            setProfile(false);
            setNewName("");
            setPass("");
          }}
        >
          <Text style={styles.modalX}>X</Text>
        </TouchableNativeFeedback>
        <View
          style={[
            styles.settingsContainer,
            { borderWidth: 0, paddingHorizontal: 5 },
          ]}
        >
          <Text style={styles.settingsTitle}>Profili Degistir</Text>
          <View style={{ position: "relative" }}>
            <Image
              style={styles.profileAvatar}
              source={require("../assets/avatar.png")}
            />

            <MaterialCommunityIcons
              name="pencil"
              size={12}
              color="#000"
              style={styles.profilePen}
            />
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.profileLeftText}>ISIM</Text>
            <TextInput
              style={[styles.profileRightText, { width: "60%" }]}
              onChangeText={(text) => setNewName(text)}
              placeholder={username}
              value={newName}
            />
          </View>
          <View style={styles.profileContainer}>
            <Text style={styles.profileLeftText}>SIFRE</Text>
            <TextInput
              style={[styles.profileRightText, { width: "60%" }]}
              onChangeText={(text) => setNewPass(text)}
              secureTextEntry
              placeholder="Yeni sifre"
              value={newPass}
            />
          </View>
          <View style={styles.profileContainer}>
            <Picker
              selectedValue={newCountry}
              mode="dropdown"
              prompt="Ulkeni sec"
              style={{
                color: "#fff",
                width: "100%",
                alignSelf: "center",
                placeholderTextColor: "#fff",
              }}
              itemStyle={{
                backgroundColor: "grey",
                color: "blue",
                fontFamily: "Geomanist-Medium",
                fontSize: 12,
              }}
              onValueChange={(item, index) => setNewCountry(item)}
            >
              <Picker.Item label="Turkiye" value="Turkiye" />
              <Picker.Item label="USA" value="USA" />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => {
              setCountry(newCountry);
              setPass(newPass);
              setUserName(newName);
              setProfile(false);
            }}
          >
            <Text style={styles.save}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  headerContainer: {
    width,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  avatar: {
    width: IMAGE_WIDTH / 2,
    height: IMAGE_HEIGHT / 2,
  },
  headerUserContainer: {
    height: IMAGE_HEIGHT / 2,
  },
  lvlbarBg: {
    height: 4,
    backgroundColor: "#1b1e2b",
    borderRadius: 50,
  },
  lvlbarActive: {
    backgroundColor: "#393d86",
    height: 4,
    width: EXP,
    borderRadius: 50,
  },
  username: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    letterSpacing: 0.5,
  },
  userlvl: {
    color: "#393d86",
    fontSize: 14,
    fontFamily: "Geomanist-Bold",
  },
  avatarBorder: {
    width: IMAGE_WIDTH / 2 + 5,
    height: IMAGE_WIDTH / 2 + 5,
    /*
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    transform: [{ skewX: "-45deg" }],
    margin: 20,
    */
  },
  avatarDeneme: {
    backgroundColor: "#fff", //"#151826"
    width: 200,
    height: 100,
    transform: [{ skewX: "20deg" }],
    position: "absolute",
  },
  gemContainer: {
    flexDirection: "row",
    height: IMAGE_HEIGHT / 1.8,
    width: IMAGE_HEIGHT,
    backgroundColor: "#0b0c14",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#151826",
    alignItems: "center",
    justifyContent: "center",
  },
  gem: {
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    fontSize: 16,
    marginRight: 5,
  },
  iconContainer: {
    height: IMAGE_HEIGHT / 1.8,
    width: IMAGE_HEIGHT / 1.8,
    borderRadius: 12,
    backgroundColor: "#151826",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width,
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginVertical: "2.5%",
  },
  prize: {
    width,
    height: width * 0.5,
    marginBottom: "2.5%",
  },
  prizeText: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "Spantaran",
    color: "#fff",
    width: "80%",
    backgroundColor: "#6a6ffd",
    paddingVertical: "3%",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 12,
  },
  raceContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2.5%",
  },
  raceText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Spantaran",

    letterSpacing: -0.3,
    textAlign: "center",
  },
  raceButton: {
    paddingVertical: "5%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6b70ff",
    width: "48%",
  },
  bottomContainer: {
    flexDirection: "row",
  },
  itemContainer: {
    width: width / 5,
    height: width / 4.5,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#05060b",
    borderColor: "#d6ce36",
    borderWidth: 0.5,
    marginHorizontal: width * 0.04,
  },
  itemTitle: {
    color: "#fff",
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "Spantaran",
  },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "2.5%",
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "red",
    borderRadius: 2,
    position: "absolute",
    top: 12,
    right: 16,
  },
  settingsContainer: {
    width: width / 1.3,
    alignSelf: "center",
    marginTop: height / 4,
    backgroundColor: "#6a6ffd",
    borderWidth: 8,
    borderRadius: 50,
    borderColor: "#4245ad",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  settingsTitle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Geomanist-Bold",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  modalX: {
    position: "absolute",
    left: width / 1.3 + 25,
    marginTop: height / 4 - 25,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Spantaran",
    backgroundColor: "#6a6ffd",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  profileContainer: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#4245ad",
    height: 60,
    borderWidth: 4,
    borderColor: "#595dd5",
    borderRadius: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  profileLeftText: {
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    fontSize: 12,
  },
  profileRightText: {
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    fontSize: 12,
    backgroundColor: "#0a0b13",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  save: {
    fontSize: 14,
    fontFamily: "Geomanist-Bold",
    color: "#050509",
    backgroundColor: "#f0ea53",
    paddingHorizontal: 22.5,
    paddingVertical: 7.5,
    marginTop: 15,
    borderRadius: 50,
    textTransform: "uppercase",
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    marginTop: 5,
  },
  profilePen: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: "#f0ea53",
    position: "absolute",
    bottom: 16,
    left: 54,
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: "2.5%",
    flex: 1,
  },
});
