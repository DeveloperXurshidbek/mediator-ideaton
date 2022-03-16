import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import React from "react";
import Conditions from "../components/Conditions";
import Deseases from "../components/Deseases";
import Categories from "../components/Categories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <StatusBar barStyle="dark-content" backgroundColor={"#fff"} /> */}
        <Text style={styles.title}>Mediator</Text>
        <Conditions />
        <Deseases />
        <Categories />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    height: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 10,
    letterSpacing: 1,
  },
});
