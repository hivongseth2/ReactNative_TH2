import { colors } from "@mui/material";
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

export default function Screen2() {
  const StarImages = () => {
    const starImages = [];

    for (let i = 0; i < 5; i++) {
      starImages.push(
        <Image
          style={styles.star}
          key={i}
          source={{
            uri: "https://e7.pngegg.com/pngimages/114/147/png-clipart-yellow-star-illustration-yellow-star-color-star-blue-angle-thumbnail.png",
          }}
        ></Image>
      );
    }

    return starImages; // Trả về mảng starImages để render
  };
  return (
    <View style={styles.container}>
      <View style={styles.HContainer}>
        <Image
          style={styles.imgProduct}
          source={{
            uri: "https://www.pngmart.com/files/7/USB-Pen-Drive-PNG-Free-Download.png",
          }}
        ></Image>
        <Text style={styles.textProduct}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa
          Bluetooth
        </Text>
      </View>

      {/* ============= */}
      <View>
        <Text style={styles.textBold}> Cực kỳ hài lòng </Text>

        {/* ========render start */}

        <View style={styles.HContainer}> {StarImages()} </View>
      </View>

      <View
        style={[
          styles.HContainer,
          {
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 5,
            height: 80,
          },
        ]}
      >
        <Image
          style={{ width: 50, height: 50, marginRight: 15 }}
          source={{
            uri: "https://p7.hiclipart.com/preview/703/554/442/camera-photography-free-content-clip-art-camera-vector.jpg",
          }}
        ></Image>

        <Text style={styles.textBold}>Thêm hình ảnh</Text>
      </View>

      <TextInput
        style={styles.textArea}
        placeholderStyle={styles.placeholderStyle}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        placeholderTextColor={"gray"}
      ></TextInput>

      <TouchableOpacity
        style={{
          backgroundColor: "#6499E9",
          width: "80%",
          height: 40,
          borderRadius: 4,
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            styles.textBold,
            {
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 20,
            },
          ]}
        >
          Gửi
        </Text>
      </TouchableOpacity>
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
    width: "100%",
    height: 100,
    paddingHorizontal: 10,
    // marginLeft: 20,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  star: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textArea: {
    height: 200,
    borderColor: "#ccc",

    borderRadius: 5,
    borderWidth: 3,
    width: "80%",
  },
  placeholderStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ccc",
  },
});
