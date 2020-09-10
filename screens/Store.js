import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import Back from "../components/back";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const STORE = {
  gem: 5432,
  hot: [
    {
      name: "Cift cevap hakki",
      price: 322,
      image: require("../assets/store/1.png"),
    },
    {
      name: "3 Oynama Hakki",
      price: 123,
      image: require("../assets/store/2.png"),
    },
    {
      name: "Yari yariya joker",
      price: 123,
      image: require("../assets/store/3.png"),
    },
  ],
  others: [
    {
      gem: 1000,
      price: 30,
    },
    {
      gem: 2500,
      price: 40,
    },
    {
      gem: 4200,
      price: 50,
    },
    {
      gem: 4200,
      price: 50,
    },
    {
      gem: 4200,
      price: 50,
    },
    {
      gem: 4200,
      price: 50,
    },
  ],
};

export default function Store({ navigation }) {
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
          <View style={styles.gemContainer}>
            <Text style={styles.gem}>{STORE.gem}</Text>
            <SimpleLineIcons name="diamond" size={16} color="#d6cc2c" />
          </View>
          <Text style={styles.title}>Magaza</Text>
          <Text style={styles.header}>Yeni Gelenler</Text>
          <View style={styles.buyWrapper}>
            {STORE.hot.map((item, index) =>
              index == 0 ? (
                <View style={styles.hotContainer} key={index}>
                  <Image
                    style={styles.hotImage}
                    source={item.image}
                    resizeMode="stretch"
                  />
                  <View style={styles.hotPrice}>
                    <Text style={styles.hotPriceText}>{item.price}</Text>
                    <SimpleLineIcons name="diamond" size={10} color="#0b0c13" />
                  </View>
                  <Text style={[styles.hotName, { marginTop: 60 }]}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.hotBuy}>SATIN AL</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={[
                    styles.hotContainer,
                    {
                      width: (width - 100) / 2,
                      height: 180,
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                  key={index}
                >
                  <Image
                    style={styles.image}
                    source={item.image}
                    resizeMode="center"
                  />
                  <View
                    style={[
                      styles.hotPrice,
                      {
                        alignSelf: "center",
                        right: null,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 0,
                      },
                    ]}
                  >
                    <Text style={styles.hotPriceText}>{item.price}</Text>
                    <SimpleLineIcons name="diamond" size={10} color="#0b0c13" />
                  </View>
                  <Text
                    style={[
                      styles.hotName,
                      { fontSize: 12, width: "50%", alignSelf: "center" },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.hotBuy}>SATIN AL</Text>
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
          <Text style={[styles.header, { marginTop: 30 }]}>DIGERLERI</Text>
          <View style={styles.othersContainer}>
            {STORE.others.map((item, index) => (
              <View style={styles.othersWrapper} key={index}>
                <Text style={styles.othersPrice}>{item.price} TL</Text>
                <View style={styles.othersGemContainer}>
                  <Text style={styles.othersGem}>{item.gem}</Text>
                  <SimpleLineIcons name="diamond" size={16} color="#f9ed30" />
                </View>
                <TouchableOpacity>
                  <Text style={styles.othersBuy}>SATIN AL</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0a0c13",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#151826",
    top: 15,
    right: 35,
    position: "absolute",
  },
  gem: {
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    color: "#fff",
    marginRight: 5,
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
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 15,
  },
  hotContainer: {
    width: width - 70,
    height: 140,
    backgroundColor: "#6a6ffd",
    borderRadius: 12,
    marginVertical: 5,
    position: "relative",
  },
  hotName: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
  },
  hotBuy: {
    fontSize: 10,
    fontFamily: "Geomanist-Bold",
    color: "#000",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 6,
    elevation: 5,
    zIndex: 5,
  },
  hotPrice: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f9ed30",
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  hotPriceText: {
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    color: "#0b0c13",
    marginRight: 5,
  },
  buyWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 64,
    height: 48,
    alignSelf: "center",
    marginTop: "20%",
  },
  hotImage: {
    width: width / 2.5,
    height: width / 5,
    top: (140 - width / 5) / 2,
    alignSelf: "center",
    position: "absolute",
  },
  othersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  othersBuy: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "Geomanist-Regular",
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    backgroundColor: "#6a6ffd",
    borderRadius: 6,
    marginVertical: 10,
    alignSelf: "center",
  },
  othersGem: {
    fontSize: 16,
    fontFamily: "Geomanist-Bold",
    color: "#f9ed30",
  },
  othersGemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  othersPrice: {
    fontSize: 12,
    fontFamily: "Geomanist-Bold",
    color: "#0b0c13",
    marginRight: 5,
    backgroundColor: "#f9ed30",
    alignSelf: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  othersWrapper: {
    backgroundColor: "#0e1019",
    paddingHorizontal: 20,
    height: 160,
    width: 120,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#5d62dd",
  },
});
