import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// Icons
import temp from "../assets/icons/condition/temp.png";
import cough from "../assets/icons/condition/cough.png";
import sneeze from "../assets/icons/condition/sneeze.png";
import injured from "../assets/icons/condition/injured.png";
import pollution from "../assets/icons/condition/air-pollution.png";

const conditions = [
  {
    icon: temp,
    name: "Isitma",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: sneeze,
    name: "Shamollash",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: cough,
    name: "Yo'tal",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: injured,
    name: "Jarohatlanish",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: pollution,
    name: "Zaxarlanish",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Conditions() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
      <Text style={styles.title}>Holatlar</Text>
      <ScrollView
        onScrollAnimationEnd={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ paddingVertical: 20 }}
      >
        {conditions.map((condition, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Details", { data: condition })}
          >
            <View style={styles.card}>
              <Image source={condition.icon} style={{ tintColor: "#5209b0" }} />
              <Text style={styles.cardText}>{condition.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: "#f3ebfc",
    marginRight: 10,
    borderRadius: 10,
    // shadowColor: "#f3ebfc",
    // shadowRadius: 10,
    // shadowOffset: { width: 1, height: 5 },
    // elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#5209b0",
    fontWeight: "700",
    paddingTop: 10,
    letterSpacing: 1,
  },
});
