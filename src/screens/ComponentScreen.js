import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.text}>This is the component screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ComponentScreen;
