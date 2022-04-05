import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: screenWidth,
    height: screenHeight /7,
    paddingTop: 58,
    backgroundColor: '#C490E4',
     
  },
  text: {
      textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
