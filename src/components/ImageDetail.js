import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title }) => {
  console.log(title);
  return (
    <View>
      <Text>{title}</Text>
      <Image source={require("../../assets/forest.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageDetail;
