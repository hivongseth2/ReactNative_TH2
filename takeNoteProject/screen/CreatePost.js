import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function CreatePost({ navigation, route }) {
  const [text, setText] = useState(
    route.params.todo ? route.params.todo.name : ""
  );
  const Post = async () => {
    const todo = {
      id: route.params.todo ? route.params.todo.id : Math.random(),
      name: text,
      status: false,
    };
    let updatedTodos;

    if (route.params.todo) {
      updatedTodos = route.params.user.todo.map((existingTodo) =>
        existingTodo.id === todo.id ? todo : existingTodo
      );
    } else {
      updatedTodos = [...route.params.user.todo, todo];
    }

    try {
      const response = await fetch(
        `https://6544ad645a0b4b04436cb772.mockapi.io/todo/${route.params.user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo: updatedTodos }),
        }
      );

      if (response.ok) {
        route.params.reload();
        navigation.navigate("Home", { user: route.params.user });
      } else {
        console.error("Failed to update todos:", response.status);
      }
    } catch (error) {
      console.error("Error updating todos:", error);
    }
  };

  return (
    <View style={styles.Vcontainer}>
      <Text>CreatePost</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        ></TextInput>
      </View>

      <Pressable style={styles.btn} onPress={() => Post()}>
        <Text>tạo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Vcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  inputContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    marginVertical: 30,
    width: 300,
    height: 40,
    borderRadius: 2,
  },
  input: {
    width: 280,
    height: 30,
    paddingLeft: 10,
    borderWidth: 0, // Đặt giá trị borderWidth thành 0 để loại bỏ border
    outlineStyle: "none",
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#86A789",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
});
