import React, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); //=== const [state, setstate]

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} style={styles.fixToText} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} style={styles.fixToText} />
      <Text>Current Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
});

export default CounterScreen;
