import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {

  console.log(props);
  
  return (
    <View>
      <Text style={styles.text}>Sidney Aguirre</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')} //to go to the "Components" component. 
        title="Go to Components" 
      />
      <Button 
        onPress={() => props.navigation.navigate('List')} //to go to the "List" component. 
        title="Go to List" 
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
