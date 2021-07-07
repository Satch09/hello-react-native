import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColourCounter from "../components/ColourCounter";

const ColourScreen = () => {
  const [colours, setColours] = useState([]);
  return (
    <View>
      <Text style={styles.text}>Colour Screen</Text>
      <ColourCounter title={"red"} />
      <ColourCounter title={"green"} />
      <ColourCounter title={"blue"} />
    </View>
  );
};

const getRandomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColourScreen;
