import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";

export default function BeginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/blue.png")}
        ></Image>
      </View>
      <Text style={styles.text}>POWER BIKE SHOP</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Shopping");
        }}
      >
        <Text style={styles.textBtn}>Get Started</Text>
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
  text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "VT323",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "400",
    padding: 20,
    lineHeight: "normal",
  },

  imgContainer: {
    borderRadius: "50px",
    backgroundColor: "rgb(233, 65, 65)",
    width: "359px",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "388px",
  },
  image: {
    width: 292,
    height: 270,
    flexShrink: 0,
  },
  button: {
    width: "340px",
    height: "61px",
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#E94141",
    justifyContent: "center",
  },
  textBtn: {
    color: "#FEFEFE",
    textAlign: "center",
    fontFamily: "VT323",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
});
