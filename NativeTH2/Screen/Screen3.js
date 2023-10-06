import React, { useEffect, useState } from "react";
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

export default function Screen3() {
  const [upcase, setUpcase] = useState({
    status: false,
    item: [
      "A",
      "B",
      "C",
      "D",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "S",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "N",
      "M",
    ],
  });
  const [symbol, setSymbol] = useState({
    status: false,
    item: ["!", "@", "#", "$", "%", "^", "&", "*"],
  });
  const [downcase, setDowncase] = useState({
    status: false,
    item: upcase.item.map((character) => character.toLowerCase()),
  });

  const [number, setNumber] = useState({
    status: false,
    item: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  });
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  useEffect(() => {}, [Password]);

  const gene = () => {
    const selectedElements = [];

    if (downcase.status) {
      selectedElements.push(...downcase.item);
    }
    if (upcase.status) {
      selectedElements.push(...upcase.item);
    }
    if (number.status) {
      selectedElements.push(...number.item);
    }
    if (symbol.status) {
      selectedElements.push(...symbol.item);
    }

    let password = "";
    const passwordLength = parseInt(length);

    if (
      selectedElements.length > 0 &&
      !isNaN(passwordLength) &&
      passwordLength > 0
    ) {
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedElements.length);
        password += selectedElements[randomIndex];
      }
    } else {
      password =
        "Please select at least one element and specify a valid password length.";
    }

    setPassword(password);
  };
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.h1}>PASSWORD GENERATEOR</Text>
        <Text style={styles.mainInput} value={Password}>
          {Password}
        </Text>
        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Password length</Text>
          <TextInput style={styles.Input} onChangeText={setLength}></TextInput>
        </View>
        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include lower case letter</Text>
          <BouncyCheckbox
            isChecked={downcase.status}
            onPress={() =>
              setDowncase({ ...downcase, status: !downcase.status })
            }
          />
        </View>
        {/* = */}

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include upcase case letter</Text>
          <BouncyCheckbox
            isChecked={upcase.status}
            onPress={() => setUpcase({ ...upcase, status: !upcase.status })}
          />
        </View>

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include number</Text>
          <BouncyCheckbox
            isChecked={number.status}
            onPress={() => setNumber({ ...number, status: !number.status })}
          />
        </View>

        <View style={styles.HContainer}>
          <Text style={styles.textBold}>Include special symbol</Text>
          <BouncyCheckbox
            isChecked={symbol.status}
            onPress={() => setSymbol({ ...symbol, status: !symbol.status })}
          />
        </View>

        <TouchableOpacity style={styles.Button} onPress={() => gene()}>
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
    color: "#fff",
    fontSize: 18,
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
