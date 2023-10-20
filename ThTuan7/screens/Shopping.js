import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
// import { FlatList } from "react-native-web";

export default function Shopping({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Pinarello",
      price: 1800,
      image: require("../assets/blue.png"),
      type: "Mountain",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 2,
      name: "Pina Mountai",
      price: 1700,
      image: require("../assets/redX.png"),
      type: "Mountain",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 3,
      name: "Pina Bike",
      price: 1500,
      image: require("../assets/purple.png"),
      type: "Roadbike",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 4,
      name: "Pinarello",
      price: 1900,
      image: require("../assets/RedY.png"),
      type: "Roadbike",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 5,
      name: "Pinarello",
      price: 2700,
      image: require("../assets/purple.png"),
      type: "Roadbike",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 6,
      name: "Pinarello",
      price: 3600,
      image: require("../assets/redY.png"),
      type: "Mountain",
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
  ];
  const [filter, setFilter] = useState(data);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world’s Best Bike</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.containerFilter}
          onPress={() => {
            setFilter(data);
          }}
        >
          <Text style={styles.textFilter}>All</Text>
        </Pressable>
        <Pressable
          style={styles.containerFilter}
          onPress={() => {
            const temp = data.filter((item) => {
              return item.type == "Roadbike";
            });

            setFilter(temp);
          }}
        >
          <Text style={styles.textFilter}>Roadbike</Text>
        </Pressable>
        <Pressable
          style={styles.containerFilter}
          onPress={() => {
            const temp = data.filter((item) => {
              return item.type == "Mountain";
            });

            setFilter(temp);
          }}
        >
          <Text style={styles.textFilter}>Mountain</Text>
        </Pressable>
      </View>
      <FlatList
        data={filter}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate("Detail", item);
              }}
            >
              <Image style={styles.image} source={item.image}></Image>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textPrice}>{item.price}</Text>
            </Pressable>
          );
        }}
      ></FlatList>
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
  headerText: {
    color: "#E94141",
    textAlign: "center",
    fontFamily: "Ubuntu",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  itemContainer: {
    width: "167px",
    height: "200px",
    flexShrink: 0,
    borderRadius: "10px",
    backgroundColor: "rgba(247, 186, 131,0.15)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    shadowOffset: { width: 2, height: 5 },
    margin: 10,
  },
  image: {
    width: "135px",
    height: "127px",
    flexShrink: 0,
    resizeMode: "contain",
  },
  containerFilter: {
    borderRadius: "5px",
    border: "1px solid rgba(233, 65, 65, 0.53)",
    background: "rgba(196, 196, 196, 0.00)",
    width: "99px",
    height: "32px",
    marginHorizontal: 10,
    flexShrink: 0,
  },
  textName: {
    color: "rgba(0, 0, 0, 0.60)",
    textAlign: "center",
    fontFamily: "Voltaire",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    display: "flex",
    width: 100,
    height: 25,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
  },
  textPrice: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Voltaire",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  textFilter: {
    color: "#BEB6B6",
    textAlign: "center",
    fontFamily: "Voltaire",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
});
