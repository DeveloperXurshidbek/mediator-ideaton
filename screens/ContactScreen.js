import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
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
