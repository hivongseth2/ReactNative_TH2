import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [type, setType] = useState([]);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://6544ad645a0b4b04436cb772.mockapi.io/cook")
      .then((response) => response.json())
      .then((dataApi) => {
        setData(dataApi);
        setDataFilter(dataApi);
        const types = dataApi.map((item) => item.type);

        const uniqueSet = new Set(types);

        const uniqueTypes = [...uniqueSet];

        setType(uniqueTypes);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(filter);
    if (filter === "") {
      setDataFilter(data);
      return;
    }
    let temp = [];

    data.forEach((e) => {
      if (e.type === filter) {
        {
          temp.push(e);
        }
      }
    });
    setDataFilter(temp);
  }, [filter]);

  return (
    <View>
      <Text style={styles.h4}>Welcome, JaJa!</Text>
      <Text style={styles.h2}>Choice your best food!</Text>

      <TextInput
        style={styles.searchContainer}
        placeholder="Search"
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          let temp = [];
          data.forEach((element) => {
            console.log(element);
            if (element.name.toLowerCase().includes(text)) {
              temp.push(element);
            }
          });

          setDataFilter(temp);
        }}
      ></TextInput>
      <View>
        <FlatList
          horizontal
          data={type}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={[
                  styles.item,
                  { backgroundColor: item == filter ? "#F1B000" : "#ccc" },
                ]}
                onPress={() => {
                  if (filter === item) {
                    setFilter("");
                  } else {
                    setFilter(item);
                  }
                }}
              >
                <Text style={styles.h4}>{item}</Text>
              </Pressable>
            );
          }}
        ></FlatList>
      </View>

      <View style={styles.container}>
        <FlatList
          data={dataFilter}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.hContainer,
                  {
                    backgroundColor: "#F4DDDD",
                    borderRadius: 10,
                    width: 377,
                    height: 115,
                    marginBottom: 10,
                  },
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                ></Image>
                <View
                  style={[
                    styles.container,
                    {
                      alignItems: "flex-start",
                      marginLeft: 30,
                      justifyContent: "space-around",
                      height: "100%",
                      backgroundColor: "#F4DDDD",
                    },
                  ]}
                >
                  <Text style={styles.h3}>{item.name}</Text>
                  <Text style={styles.h4}>{item.intro}</Text>
                  <Text style={styles.h3}>{item.price}</Text>
                </View>
                <Pressable
                  style={styles.plus}
                  onPress={() => {
                    navigation.navigate("Detail", { item });
                  }}
                >
                  <Text
                    style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
            );
          }}
        ></FlatList>
      </View>
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
  plus: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 45,
    height: 44,
    backgroundColor: "#F1B000",

    borderTopLeftRadius: 200,
    borderTopRightRadius: 41,
    borderBottomLeftRadius: 78,
    borderBottomRightRadius: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  h3: {
    fontWeight: "bold",
    fontSize: "18",
  },
  itemImage: {
    width: 110,
    height: 100,
    borderRadius: 10,
  },
  h2: {
    // color: "gray",
    fontWeight: "bold",
    fontSize: 22,
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
    borderRadius: 10,
    borderColor: "#ccc",
    marginVertical: 10,
  },
  item: {
    width: 100,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
