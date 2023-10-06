import { Style } from "@mui/icons-material";
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
import InputSpinner from "react-native-input-spinner";
import CPsc4 from "./CPsc4";

export default function Screen4() {
  const [num, setNum] = useState(1);
  useEffect(() => {}, [num]);
  const log = () => {
    console.log(num);
  };
  return (
    <View style={styles.container}>
      <View style={styles.HContainer}>
        <Image
          source={{
            uri: "https://product.hstatic.net/1000237375/product/uong-phap-giai-cac-dang-toan-thpt-nguyen-ham-tich-phan-va-ung-dung-440_master.jpg",
          }}
          style={styles.imgProduct}
        ></Image>

        <View>
          <Text style={styles.textProduct}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.textProduct}>Cung cấp bởi TiKi Trading</Text>
          <Text style={styles.redText}>141.800 đ</Text>
          <Text
            style={[
              styles.textProduct,
              { color: "#ccc", textDecorationLine: "line-through" },
            ]}
          >
            141.800 đ
          </Text>

          <View style={styles.HContainer}>
            {" "}
            <InputSpinner
              max={10}
              min={1}
              step={1}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              buttonStyle={styles.button}
              onDecrease={2}
              style={styles.spinner}
              rounded={false}
              onChange={(num) => {
                setNum(num);
              }}
            />
            <TouchableOpacity>
              <Text style={{ color: "blue", fontWeight: "bold" }}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.HContainer, { marginTop: -30 }]}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,

            width: "50%",
          }}
        >
          Mã giảm giá đã lưu
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#134FEC", fontWeight: "bold" }}>
            Xem tại đây
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.HContainer, { marginTop: -30 }]}>
        <View style={styles.sectionStyle}>
          <Image
            source={{
              uri: "https://www.pngmart.com/files/8/Voucher-Download-PNG-Image.png",
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}
            placeholder="Mã giảm giá"
            underlineColorAndroid="transparent"
            placeholderTextColor={"#333"}
          />
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.btnText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.HContainer, { marginTop: -30 }]}>
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue", fontWeight: "bold" }}>
            Nhập tại đây?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.HContainer, { marginTop: -50 }]}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tạm tính</Text>
        <Text style={styles.redText}>{(num * 141.8).toFixed(2)}</Text>
      </View>
      <View
        style={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          marginLeft: 40,
        }}
      >
        <CPsc4 num={num}></CPsc4>
        <TouchableOpacity style={styles.btnOrder} onPress={() => log()}>
          <Text
            style={[
              styles.btnText,
              { textAlign: "center", justifyContent: "center" },
            ]}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
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
