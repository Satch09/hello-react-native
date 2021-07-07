import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListItems = () => {
  const listItems = [
    { name: "A", key: "1" },
    { name: "B", key: "2" },
    { name: "C", key: "3" },
    { name: "D", key: "4" },
    { name: "E", key: "5" },
    { name: "F", key: "6" },
  ];
  return (
    <FlatList
      // horizontal
      data={listItems}
      keyExtractor={(listItems) => listItems.key}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 50,
  },
});

export default ListItems;
