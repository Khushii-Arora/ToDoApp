import { View, Text, StyleSheet, ScrollView,TextInput } from "react-native";
import React, { useState} from "react";

export default function PostTask() {
    const [text, onChangeText] = useState();
    
  return (
    <View style={styles.container}>
     
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 26 }}>ADD Tasks</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Task"
        value={text}
      /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 80,
    flex: 1,
    backgroundColor: "#fff",

  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    padding: 5,
    color: "#C490E4",
    borderRadius: 7,
    margin: 2,
    backgroundColor: "#CDF0EA",
  },
});
