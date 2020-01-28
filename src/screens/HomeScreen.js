import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ( { navigation }) => { //destructuring the props object received to obtain only the navigation characteristic
  
  return (
    <View>
      <Text style={styles.text}>Sidney Aguirre</Text>
      <Button 
        onPress={() => navigation.navigate('Components')} //to go to the "Components" component. 
        title="Go to Components" 
      />
      <Button 
        onPress={() => navigation.navigate('List')} //to go to the "List" component. 
        title="Go to List" 
      />
      <Button 
        onPress={() => navigation.navigate('Images')}  
        title="Go to Images" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}  
        title="Go to Counter" 
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
}; 

const styles = StyleSheet.create({
  text: {
    fontSize: 80
  }
});

export default HomeScreen;
