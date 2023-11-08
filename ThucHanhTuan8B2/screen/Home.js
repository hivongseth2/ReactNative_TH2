import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [type, setType] = useState();

  useEffect(() => {
    fetch("https://6544ad645a0b4b04436cb772.mockapi.io/cook")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      <Text style={styles.h4}>Welcome, JaJa!</Text>
      <Text style={styles.h2}>Choice your best food!</Text>
      <FlatList data={type}></FlatList>
      <TextInput
        style={styles.searchContainer}
        placeholder="Search  "
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h4: {
    color: "gray",
    fontWeight: "bold",
    fontSize: "15",
  },

  h2: {
    // color: "gray",
    fontWeight: "bold",
    fontSize: "22",
  },
  hContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  itemType: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    width: "80%",
    height: 50,
    borderWidth: 1,
  },
});
