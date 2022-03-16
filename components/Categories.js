import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import arrow from "../assets/right-arrow.png";

const categories = [
  {
    name: "Onalar uchun",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Kun tartibi",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Yosh oilalar uchun",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "COVID-19",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bo'limlar</Text>
      <View style={styles.listBox}>
        {categories.map((category, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() =>
              navigation.navigate("CategoryDetails", { data: category })
            }
          >
            <View style={styles.addStyle}>
              <View style={styles.list}>
                <Text style={styles.listText}>{category.name}</Text>
                <Image
                  source={arrow}
                  style={{ width: 30, height: 30, tintColor: "#5209b0" }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20, paddingHorizontal: 20 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  listBox: {
    paddingTop: 10,
    marginBottom: 20,
  },
  addStyle: {
    width: "100%",
    marginTop: 20,
    paddingLeft: 8,
    height: 50,
    backgroundColor: "#5209b0",
    borderRadius: 10,
  },
  list: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#f3ebfc",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5209b0",
  },
});
