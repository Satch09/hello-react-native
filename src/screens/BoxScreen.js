import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: "black",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textStyle: {
    borderWidth: 4,
    borderColor: "red",
  },
});

export default BoxScreen;
