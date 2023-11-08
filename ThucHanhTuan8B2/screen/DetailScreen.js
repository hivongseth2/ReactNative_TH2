import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import NumericInput from "react-native-numeric-input";

import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen({ navigation, route }) {
  const [data, setData] = useState(route.params.item);
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.itemImage,
          { alignSelf: "center", marginLeft: -35, marginBottom: 20 },
        ]}
        source={{ uri: data.image }}
      ></Image>
      <View style={[styles.hContainer, { paddingBottom: 20 }]}>
        <Text style={styles.h2}> {data.name} </Text>
        <Text style={styles.h4Gray}> {data.type} </Text>
      </View>
      <View style={[styles.hContainer, { paddingBottom: 20 }]}>
        <Text style={styles.h4Gray}>{data.intro}</Text>
        <Text style={styles.h4Black}>{data.price}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Ionicons name="time-outline" size={20} color="gray" />
        <Text style={styles.h4Gray}> Delivery in</Text>
      </View>
      <View style={[styles.hContainer, { paddingBottom: 20 }]}>
        <Text style={styles.h4Black}>30-45 mins</Text>
        <NumericInput
          value={quantity}
          onPress={({ value }) => {
            console.log(value);
          }}
          totalWidth={90}
          totalHeight={30}
          iconSize={16}
          step={1}
          containerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          valueType="integer"
          rounded
          textColor="#B0228C"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#EA3788"
          leftButtonBackgroundColor="#E56B70"
        />
      </View>
      <Text style={styles.h2}>Restaurant info</Text>
      <Text style={styles.h4Gray}>{data.description}</Text>
      <Pressable style={styles.btn}>
        <Text style={styles.textBtn}> Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 35,
  },
  h4Gray: {
    color: "gray",
    fontWeight: "bold",
    fontSize: "15",
  },
  h4Black: {
    fontWeight: "bold",
    fontSize: "15",
  },

  h3: {
    fontWeight: "bold",
    fontSize: "18",
  },
  itemImage: {
    width: 272,
    height: 278,
  },
  btn: {
    marginTop: 30,
    width: 316,
    height: 58,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1B000",
  },
  textBtn: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 30,
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
    width: "80%",
    padding: 10,
  },
  itemType: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
