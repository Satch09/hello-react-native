import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the homescreen</Text>
      <Button
        title="Go to component Demo"
        onPress={() => props.navigation.navigate("Component")}
      />
      <Button
        title="Go to Images"
        onPress={() => props.navigation.navigate("Images")}
      />
      <Button
        title="Go to Colours"
        onPress={() => props.navigation.navigate("Colours")}
      />
      <Button
        title="Go to Squares"
        onPress={() => props.navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go to Text"
        onPress={() => props.navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to Box"
        onPress={() => props.navigation.navigate("BoxScreen")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go Home!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
