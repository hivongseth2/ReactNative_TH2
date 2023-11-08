import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@mui/material";
export default function BeginScreen({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.thumb}
        source={require("../assets/thumb.jpg")}
      ></Image>

      <Text style={styles.h2}>MANAGE YOUR TASK</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={24}
          style={{ paddingLeft: 10 }}
          color="black"
        />
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
        ></TextInput>
      </View>

      <Pressable
        style={styles.btnContainer}
        onPress={() => {
          fetch(`https://6544ad645a0b4b04436cb772.mockapi.io/todo/${name}`)
            .then((response) => response.json())
            .then((data) => {
              navigation.navigate("Home", data);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        <Text style={styles.btnText}>GET STARTED </Text>
      </Pressable>
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
  thumb: {
    width: 300,
    height: 300,
  },
  inputContainer: {
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  input: {
    width: 280,
    height: 30,
    paddingLeft: 10,
    borderWidth: 0, // Đặt giá trị borderWidth thành 0 để loại bỏ border
    outlineStyle: "none",
  },
  btnContainer: {
    width: 150,
    height: 50,
    backgroundColor: "#86A789",
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  h2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#86A789",
    textAlign: "center",
    marginBottom: 30,
  },
});
