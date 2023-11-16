import React, { useReducer } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { age: 22 });

  function reducer(state, action) {
    switch (action.type) {
      case "plus_age":
        return {
          age: state.age + 1,
        };
      case "minus_age":
        return {
          age: state.age - 1,
        };
    }

    throw new Error("Unknown action.");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({ type: "plus_age" });
        }}
      >
        <Text>plus age</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({ type: "minus_age" });
        }}
      >
        <Text>minus age</Text>
      </TouchableOpacity>
      <Text>Hello! {state.age}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    margin: 10,
  },
});
