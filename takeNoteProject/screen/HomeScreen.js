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

export default function HomeScreen({ navigation, route }) {
  const [data, setData] = useState(
    route && route.params ? route.params.todo : []
  );
  const [name, setName] = useState(
    route && route.params ? route.params.name : ""
  );
  const [avatar, setAvatar] = useState(
    route && route.params ? route.params.image : ""
  );
  const [dataFilter, setDataFilter] = useState(data);
  const [search, setSearch] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const updateData = (newToDo) => {
    setDataFilter([...dataFilter, newToDo]);

    const todo = [...dataFilter, newToDo];

    fetch(`https://6544ad645a0b4b04436cb772.mockapi.io/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ todo: todo }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchApi();
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      });
  };

  useEffect(() => {
    console.log(dataFilter);
  }, [dataFilter]);

  //fetch todo

  const fetchApi = () => {
    fetch(`https://6544ad645a0b4b04436cb772.mockapi.io/todo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("test", data);
        setData(data.todo);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          <Image style={styles.avatar} source={{ uri: avatar }}></Image>

          <View style={styles.Vcontainer}>
            <Text style={styles.name}>{`Hi ${name}`}</Text>
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

            let temp = [];
            data.forEach((element) => {
              if (element.name.includes(text)) {
                temp.push(element);
              }
            });

            console.log(temp);
            setDataFilter(temp);
          }}
        ></TextInput>
      </View>

      <View>
        <FlatList
          data={dataFilter}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.hContainer,
                  {
                    width: 300,
                    justifyContent: "space-between",
                    padding: 10,
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    marginBottom: 20,
                  },
                ]}
              >
                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  isChecked={item.status}
                  //   text="Custom Checkbox"
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{ fontFamily: "JosefinSans-Regular" }}
                  //=============
                  onPress={(isChecked) => {
                    // Cập nhật trạng thái mục dựa trên isChecked
                    const updatedData = dataFilter.map((dataItem) => {
                      if (dataItem.id === item.id) {
                        return { ...dataItem, status: isChecked };
                      }
                      return dataItem;
                    });
                    setDataFilter(updatedData);
                  }}
                />

                <Text style={styles.name}>{item.name}</Text>
                <AntDesign name="edit" size={24} color="red" />
              </View>
            );
          }}
        ></FlatList>
      </View>
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
          navigation.navigate("Add", { setData: updateData, name: name });
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
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
