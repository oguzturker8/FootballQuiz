import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch } from "react-native-gesture-handler";

export default function Settings({
  text,
  isProfile,
  switchValue,
  setProfile,
  setSettings,
}) {
  const [isEnabled, setIsEnabled] = useState(switchValue);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {isProfile ? (
        <TouchableOpacity
          onPress={() => {
            setProfile(true);
            setSettings(false);
          }}
        >
          <Text style={styles.profileText}>Değiştir</Text>
        </TouchableOpacity>
      ) : (
        <Switch
          trackColor={{ false: "#0a0b13", true: "#0a0b13" }}
          thumbColor={isEnabled ? "#fffc00" : "#262861"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#4245ad",
    height: 60,
    borderWidth: 4,
    borderColor: "#595dd5",
    borderRadius: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 1.5,
  },
  text: {
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    fontSize: 12,
  },
  profileText: {
    color: "#fff",
    fontFamily: "Geomanist-Medium",
    fontSize: 12,
    backgroundColor: "#0a0b13",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
