import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function SuggestsScreen() {
  return (
    <View style={styles.container}>
      <Text>SuggestsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: "100%",
  },
});
