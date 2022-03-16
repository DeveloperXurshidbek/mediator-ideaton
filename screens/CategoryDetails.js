import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryDetails({ navigation, route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text>Screen Name: {data.name}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
