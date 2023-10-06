import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CPsc4(props) {
  console.log(num);
  const { num } = props;

  return (
    <View style={styles.HContainer}>
      <Text style={{ fontSize: 23, fontWeight: "bold", color: "gray" }}>
        Thành tiền
      </Text>
      <Text style={styles.redText}>{(141.8 * num).toFixed(2)} </Text>
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
  },
  sectionStyle: {
    flexDirection: "row",

    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    width: 233,
    borderRadius: 5,
    // margin: 10,
  },
  imageStyle: {
    // paddingTop: 10,
    margin: 5,
    height: 25,
    width: 30,
    // resizeMode: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  spinner: {
    width: 120,
    height: 50,
  },
  parentContainer: {
    width: "100%",
    height: "100%",

    backgroundColor: "#3B3B98",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "black",
  },
  imgProduct: {
    width: 100,
    height: 140,
  },
  textProduct: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 15,
    padding: 5,
    width: "100%",
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
    fontSize: 18,
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
    width: 100,
    height: 43,
    backgroundColor: "#3B3B98",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  btnOrder: {
    width: "90%",
    height: 50,
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  redText: {
    color: "red",
    fontSize: 18,
    marginLeft: 18,

    fontWeight: "bold",
  },
});
