import React from "react";
import { Text, StyleSheet, View } from "react-native";

const myComponent = () => {
  const name = "Sidney";

  return (
    <View>
      <Text style={style.header}>Getting started with react native!</Text>
      <Text style={style.text}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20
  },
  header: {
    fontSize: 45
  }
});

export default myComponent;
