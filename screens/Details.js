import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

import goBack from "../assets/icons/angle-left.png";

export default function Details({ navigation, route }) {
  const { data } = route.params;
  return (
    <View>
      {/* <StatusBar barStyle="dark-content" backgroundColor={"#5209b0"} /> */}
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: 30, height: 30 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={goBack}
            style={{
              tintColor: "#fff",
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{data.name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{data.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: "#5209b0",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },
  body: {
    height: "100%",
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    padding: 20,
  },
  bodyText: {
    fontSize: 15,
    color: "#555",
  },
});
