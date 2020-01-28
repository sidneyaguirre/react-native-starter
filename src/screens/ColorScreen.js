import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

const ColorScreen = () => {

    const [colors, setcolors] = useState([]);

  return (
    <View>
      <Button title="Add Color" onPress={() => {
          setcolors([...colors, randomRgb()]);
      }} />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
}; //we use the style in the view directly, because it will change in time

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256); //rgb goes from 0 to 255, but in theory Math.floor will help us to keep it under 256 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    console.log( `rgb(${red}, ${green}, ${blue})`);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;

