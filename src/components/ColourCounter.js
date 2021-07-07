import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const ColourCounter = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`Increase ${title}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${title}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ColourCounter;
