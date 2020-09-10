import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import SocialButton from "../components/socialbutton";
import LoginInput from "../components/logininput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
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
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="center"
        />
        <Text style={styles.title}>GIRIS YAP</Text>
        <Text style={styles.desc}>
          Giriş yaparak sıralamada yerinizi alın ve bir çok ödülün sahibi olun.
        </Text>
        <View style={styles.socialContainer}>
          <SocialButton type="f" />
          <SocialButton type="t" />
          <SocialButton type="g" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <LoginInput holder="kullanıcı adı" />
          <LoginInput holder="şifre" isPass />
          <LoginInput holder="şifre tekrarı" isPass />
        </View>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginText}>GİRİŞ YAP</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height / 100,
  },
  loginContainer: {
    width: width * 0.65,
    height: 50,
    borderRadius: width * 0.325,
    backgroundColor: "#6a6ffd",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height / 18,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Geomanist-Medium",
  },
  desc: {
    width: width * 0.65,
    textAlign: "center",
    color: "#575bce",
    fontSize: 14,
    marginVertical: height / 50,
    fontFamily: "Geomanist-Regular",
  },
  title: {
    fontSize: 32,
    color: "#6a6ffd",
    fontFamily: "Spantaran",
    letterSpacing: 1,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
  },
});
