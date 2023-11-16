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
import { Entypo } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@mui/material";
import { useEffect } from "react";
export default function BeginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchApi = () => {
    fetch(`https://6544ad645a0b4b04436cb772.mockapi.io/todo/`)
      .then((response) => response.json())
      .then((dataAPI) => {
        setData(dataAPI);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const Login = () => {
    if (name && password) {
      const foundUser = data.find(
        (item) => item.name === name && item.password === password
      );

      if (foundUser) {
        setIsAuth(true);

        navigation.navigate("Home", { user });
      } else {
        setIsAuth(false);
        alert("Đăng nhập thất bại");
      }
    }
  };

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

      <View style={[styles.inputContainer, { marginTop: 10 }]}>
        <Entypo
          name="lock"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>

      <Pressable
        style={styles.btnContainer}
        onPress={() => {
          Login();
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
