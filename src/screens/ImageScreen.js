import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ListItems = () => {
  return (
    <View>
      <ImageDetail title={"Forest"} />
      <ImageDetail title={"Cat"} />
      <ImageDetail title={"Space"} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ListItems;
