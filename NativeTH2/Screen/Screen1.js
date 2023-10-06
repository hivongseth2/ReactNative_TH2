import { StatusBar } from "expo-status-bar";
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
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@react-navigation/native";
import { useState } from "react";
import Alert from "./Alert";

export default function Screen1() {
  const [listPass, setListPass] = useState([{ user: "123", password: "123" }]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [entryPass, setEntryPass] = useState(true);
  const [status, setStatus] = useState(false);
  const [mess, setMess] = useState("");
  const closeAlert = () => {
    setStatus(!status);
  };
  const login = () => {
    if (user && pass) {
      const isAuthenticated = listPass.some(
        (entry) => entry.user === user && entry.password === pass
      );

      if (isAuthenticated) {
        setMess("Đăng nhập thành công");
        closeAlert();
      } else {
        setMess("Đăng nhập thất bại");
        closeAlert();
      }
    } else {
      setMess("Vui lòng điền đầy đủ thông tin đăng nhập");
      closeAlert();
    }
  };
  return (
    <LinearGradient
      colors={["rgba(250,193,27,1)", "rgba(184,137,0,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <View width="100%">
          <Text style={styles.texth1}>LOGIN</Text>
        </View>

        <View
          style={{
            width: "100%",
            height: "20vh",
            alignItems: "center",
            rowGap: 9,
          }}
        >
          <View style={styles.searchSection}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setUser}
              // underlineColorAndroid="transparent"
            />
          </View>
          {/* pass */}
          <View style={styles.searchSection}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={entryPass}
              onChangeText={setPass}
              // underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              onPress={() => {
                setEntryPass(!entryPass);
              }}
            >
              {" "}
              <AntDesign name="eyeo" size={24} color="black" />{" "}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles}>
          <Text style={styles.textForget}>CREATE AN ACCOUNT </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
      {status ? (
        <Alert close={closeAlert} status={status} mess={mess} />
      ) : (
        <></>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  tinyLogo: {
    height: 200,
    width: 200,
  },
  texth3: {
    fontSize: 17,
    fontWeight: "bold",
    // width: 100,
    width: "90%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  searchSection: {
    flexDirection: "row",
  },
  texth1: {
    fontSize: 30,
    fontWeight: "bold",
    width: 300,
    textAlign: "left",

    // justifyContent: "left",
  },
  button: {
    // padding: 10,
    paddingHorizontal: "35%",
    paddingVertical: 15,

    backgroundColor: "black",
    // marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    columnGap: "1em",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: "80%",
    padding: 15,

    backgroundColor: "#dea500",
  },

  logo: {
    justifyContent: "row",
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
    width: 60,
    // padding: 15,

    height: 60,
    // marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    outlineStyle: "none",
  },
  textForget: {
    color: "black",
    fontWeight: "bold",
    fontSize: "22px",
  },
});
