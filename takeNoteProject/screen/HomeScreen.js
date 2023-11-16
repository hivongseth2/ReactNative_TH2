import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-web";

export default function HomeScreen({ navigation, route }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [trigger, setTrigger] = useState(false);
  const markJob = (index) => {
    let newData = { ...data };
    newData.todo[index].status = !newData.todo[index].status;
    setData(newData);
  };

  const reload = () => {
    setTrigger(!trigger);
  };
  // edit
  const editTodo = (index) => {
    navigation.navigate("Create", {
      user: data,
      reload: reload,
      todo: data.todo[index],
    });
  };
  // xóa
  const delTodo = async (index) => {
    let newTodo = data.todo;
    newTodo.splice(index, 1);

    try {
      const response = await fetch(
        `https://6544ad645a0b4b04436cb772.mockapi.io/todo/${route.params.user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo: newTodo }),
        }
      );

      if (response.ok) {
        reload();
      } else {
        console.error("Failed to update todos:", response.status);
      }
    } catch (error) {
      console.error("Error updating todos:", error);
    }
  };
  //fetch
  const fetchApi = () => {
    fetch(
      `https://6544ad645a0b4b04436cb772.mockapi.io/todo/${route.params.user.id}`
    )
      .then((response) => response.json())
      .then((dataAPI) => {
        setData(dataAPI);
        // console.log(dataAPI);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [trigger]);
  return (
    <View style={styles.Vcontainer}>
      <View
        style={[
          styles.hContainer,
          { justifyContent: "space-around", width: "100%" },
        ]}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Begin");
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>
        <View
          style={[
            styles.hContainer,
            { alignItems: "flex-end", marginRight: 30 },
          ]}
        >
          <Image style={styles.avatar} source={{ uri: data?.image }}></Image>

          <View style={styles.Vcontainer}>
            <Text style={styles.name}>{`Hi ${data?.name}`}</Text>
            <Text style={styles.h5}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      {/* ======== */}

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
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
        ></TextInput>
      </View>

      {/* ======== */}
      <View
        style={{
          height: 500,
          width: "90%",

          alignItems: "center",
        }}
      >
        <FlatList
          data={data.todo}
          style={{ width: "80%" }}
          keyExtractor={(item) => item.id.toString()} // Adjust this line
          renderItem={({ item, index }) => {
            let status = item.status;
            return (
              <View style={[styles.hContainer, styles.containerTodo]}>
                <CheckBox
                  style={{ width: 30, height: 30 }}
                  value={status}
                  onValueChange={() => {
                    markJob(index);
                  }}
                ></CheckBox>
                <Text> {item.name}</Text>
                <Pressable
                  style={styles.btnEdit}
                  onPress={() => {
                    editTodo(index);
                  }}
                >
                  <Text style={{ color: "white" }}>Sửa</Text>
                </Pressable>
                <Pressable
                  style={styles.btnDel}
                  onPress={() => {
                    delTodo(index);
                  }}
                >
                  <Text style={{ color: "white" }}>Xóa</Text>
                </Pressable>
              </View>
            );
          }}
        ></FlatList>
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Create", { user: data, reload: reload });
        }}
      >
        <Text>+</Text>
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
  btnEdit: {
    padding: 10,
    backgroundColor: "orange",
    justifyContent: "center",
    alignContent: "center",
  },
  btnDel: {
    padding: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
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
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#86A789",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  h5: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#86A789",
    textAlign: "center",
    // marginBottom: 30,
  },
  avatar: {
    borderRadius: "50%",
    width: 50,
    height: 50,
  },

  containerTodo: {
    flex: 1,
    width: "100%",
    height: 30,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    textAlign: "left",
  },
});
