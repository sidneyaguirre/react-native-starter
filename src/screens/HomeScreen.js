import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  
  return (
    <View>
      <Text style={styles.text}>Sidney Aguirre</Text>
      <Button 
        onPress={() => console.log('Components pressed!')} 
        title="Go to Components" 
      />
      <TouchableOpacity onPress={() => console.log('List pressed!')}>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({
  text: {
    fontSize: 80
  }
});

export default HomeScreen;
