import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function AddScreen({ navigation, route }) {
  const [todo, setTodo] = useState("");
  return (
    <View style={styles.Vcontainer}>
      {/* container chưa nut back và nguyên cục header */}
      <View
        style={[
          styles.hContainer,
          { justifyContent: "space-around", width: "100%" },
        ]}
      >
        {/* Container của cục header */}
        <View
          style={[
            styles.hContainer,
            { alignItems: "flex-start", marginRight: 30 },
          ]}
        >
          <Image
            style={styles.avatar}
            source={require("../assets/avatar.png")}
          />
          <View style={styles.Vcontainer}>
            <Text style={styles.name}>{`Hi ${route.params.name}`}</Text>
            <Text style={styles.h5}>Have a great day ahead</Text>
          </View>
        </View>
        {/* kết thúc cục header */}
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>
      </View>

      {/* ======== */}
      <Text style={styles.h2}>ADD YOUR JOB</Text>

      {/* input */}

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={24}
          style={{ paddingLeft: 10 }}
          color="#ccc"
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={(text) => setTodo(text)}
        ></TextInput>
      </View>

      {/* =========== */}

      <Pressable
        style={{
          width: 60,
          height: 60,
          borderRadius: "100%",
          backgroundColor: "#12CFF3",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
        onPress={() => {
          const toDo = {
            id: Math.random(),
            name: todo,
            status: false,
          };

          if (todo.length > 0) {
            // route.params.setData([...route.params.data, toDo]);
            route.params.setData(toDo);
            navigation.navigate("Home");
          }
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>FINISH</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  hContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  Vcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
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
  h5: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#86A789",
    textAlign: "center",
    // marginBottom: 30,
  },
  h2: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#86A789",
    marginVertical: 40,
    textAlign: "center",
    // marginBottom: 30,
  },
  avatar: {
    borderRadius: "50%",
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    textAlign: "left",
  },
});
