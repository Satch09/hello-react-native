import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        // iOS
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholder={"Enter some text"}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 7,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
