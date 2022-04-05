import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

export default function GetTask() {
  const API_URL = "https://simple-todo-rn.herokuapp.com/tasks";

  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(API_URL);
      const userData = await response.json();
      setData(userData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View style={styles.container}>
     
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 26 }}>Incomplete Tasks</Text>
        {/* {data.map((entries, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#CDF0EA",
                padding: 5,
                borderRadius: 7,
                marginVertical: 10,
              }}>
              
              <Text style={{ fontSize: 16, color:'#C490E4',}}>{entries.name}</Text>
              <Text style={{ fontSize: 16}}>{entries.createdAt}</Text>
             </View>
          );
        })} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 80,
    paddingVertical: 30,
    
  },
});
