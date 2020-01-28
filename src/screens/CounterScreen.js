import React, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); //=== const [state, setstate]

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Counter: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
