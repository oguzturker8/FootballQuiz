import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
// Pages
import Login from "./screens/Login";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Quests from "./screens/Quests";
import Profile from "./screens/Profile";
import OpenGames from "./screens/OpenGames";
import Duel from "./screens/Duel";
import Races from "./screens/Races";
import Store from "./screens/Store";
import Ranking from "./screens/Ranking";
import Game from "./screens/Game";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Geomanist-Black": require("./assets/fonts/Geomanist-Black.otf"),
    "Geomanist-Bold": require("./assets/fonts/Geomanist-Bold.otf"),
    "Geomanist-Book": require("./assets/fonts/Geomanist-Book.otf"),
    "Geomanist-ExtraLight": require("./assets/fonts/Geomanist-ExtraLight.otf"),
    "Geomanist-Light": require("./assets/fonts/Geomanist-Light.otf"),
    "Geomanist-Medium": require("./assets/fonts/Geomanist-Medium.otf"),
    "Geomanist-Regular": require("./assets/fonts/Geomanist-Regular.otf"),
    "Geomanist-Thin": require("./assets/fonts/Geomanist-Thin.otf"),
    "Geomanist-Ultra": require("./assets/fonts/Geomanist-Ultra.otf"),
    Spantaran: require("./assets/fonts/Spantaran.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Quests" component={Quests} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="OpenGames" component={OpenGames} />
          <Stack.Screen name="Duel" component={Duel} />
          <Stack.Screen name="Races" component={Races} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Ranking" component={Ranking} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
