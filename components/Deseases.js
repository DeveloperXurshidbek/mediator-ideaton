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

import water from "../assets/icons/diseases/water-drop.png";
import diarrhea from "../assets/icons/diseases/diarrhea.png";
import headache from "../assets/icons/diseases/headache.png";
import allergy from "../assets/icons/diseases/allergy.png";

import arrow from "../assets/right-arrow.png";

const diseases = [
  {
    icon: water,
    name: "Suvsizlanish",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: diarrhea,
    name: "Ich ketishi",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: headache,
    name: "Bosh og'rig'i",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: allergy,
    name: "Allergiya",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Deseases() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kasalliklar</Text>
      <View style={styles.cards}>
        {diseases.map((disease, index) => (
          <View style={styles.card} key={index}>
            <Image source={disease.icon} style={styles.imgStyle} />
            <Text style={styles.cardTitle}>{disease.name}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => navigation.navigate("Details", { data: disease })}
            >
              <Text style={styles.buttonText}>O'tish</Text>
              <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
          </View>
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
  cards: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  card: {
    marginTop: 35,
    marginHorizontal: 2,
    width: "48%",
    height: 200,
    backgroundColor: "#f3ebfc",
    padding: 20,
    borderRadius: 20,
    alignSelf: "center",
  },
  imgStyle: {
    width: 60,
    height: 60,
    tintColor: "#5209b0",
  },
  cardTitle: {
    paddingTop: 15,
    fontSize: 18,
    fontWeight: "700",
    color: "#5209b0",
  },
  button: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#5209b0",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    paddingVertical: 10,

    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },
  arrow: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
});
