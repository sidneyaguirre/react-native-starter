import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 23 },
    { name: "Friend #2", age: 25 },
    { name: "Friend #3", age: 30 },
    { name: "Friend #4", age: 45 },
    { name: "Friend #5", age: 32 },
    { name: "Friend #6", age: 20 },
    { name: "Friend #7", age: 28 },
    { name: "Friend #8", age: 26 },
    { name: "Friend #9", age: 31 }
  ];

  return (
    <View>
      <FlatList 
        keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item}) => { //destructuring because if (element) we would get { item: {name: "friend #1"}, index: 0}
        return <Text style={style.text}>{item.name} - Age: {item.age}</Text>
        }}
      />
    </View>
  );
};

//to make the list spans all the way down in the screen
const style = StyleSheet.create({
    text: {
        marginVertical: 50
      },
});

export default ListScreen;
