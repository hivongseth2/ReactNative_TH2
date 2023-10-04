import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

export default function Screen3() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.h1}>PASSWORD GENERATEOR</Text>
        <TextInput style={styles.mainInput}></TextInput>
        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Password length</Text>
          <TextInput style={styles.Input}></TextInput>
        </View>
        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include lower case letter</Text>
          <BouncyCheckbox />
        </View>
        {/* = */}

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include upcase case letter</Text>
          <BouncyCheckbox />
        </View>

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include number</Text>
          <BouncyCheckbox />
        </View>

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include special symbol</Text>
          <BouncyCheckbox />
        </View>

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.btnText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
    backgroundColor: "#23235B",
    borderColor: "#3B3B98",
    borderWidth: 15,
    borderRadius: 10,
    height: "80%",
    width: "100%",
  },
  parentContainer: {
    width: "100%",
    height: "100%",

    backgroundColor: "#3B3B98",
  },
  imgProduct: {
    width: 80,
    height: 60,
  },
  textProduct: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
    width: 280,
  },
  HContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    // height: 100,
    paddingHorizontal: 10,
    // marginLeft: 20,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
  },
  star: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  Input: {
    // height: 200,
    borderColor: "#ccc",

    borderRadius: 5,
    borderWidth: 3,
    width: "44%",
    height: 40,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ccc",
  },
  mainInput: {
    backgroundColor: "#151537",
    width: "80%",
    height: 40,
    borderRadius: 5,
  },

  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    width: "80%",

    textAlign: "center",
  },
  Button: {
    width: "80%",
    height: 70,
    backgroundColor: "#3B3B98",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
