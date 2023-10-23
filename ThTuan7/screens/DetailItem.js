import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

export default function DetailItem({ route, navigation }) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image}></Image>
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <Text style={styles.des}>Description</Text>
        <Text style={styles.desContent}>{item.description}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.textBtn}>Add to card</Text>
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
  imageContainer: {
    width: 359,
    height: 388,
    flexShrink: 0,
    borderRadius: 5,
    backgroundColor: "rgba(233, 65, 65, 0.10)",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 120,
  },
  image: {
    width: 298,
    height: 339,
    flexShrink: 0,
    resizeMode: "contain",
  },
  name: {
    color: "#000",

    fontFamily: "Voltaire",
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  des: {
    color: "#000",

    fontFamily: "Voltaire",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  desContent: {
    color: "rgba(0, 0, 0, 0.57)",
    fontFamily: "Voltaire",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    display: "flex",
    marginVertical: "20px",
    width: 335,
    height: 104,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
  },
  button: {
    width: 269,
    height: 54,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#E94141",
  },
  textBtn: {
    color: "#FFFAFA",
    textAlign: "center",
    fontFamily: "Voltaire",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  price: {
    color: "rgba(0, 0, 0, 0.59)",
    marginVertical: "20px",
    fontFamily: "Voltaire",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
});
