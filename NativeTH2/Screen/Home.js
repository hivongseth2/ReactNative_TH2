import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Screen First"
        onPress={() => navigation.navigate("Screen2")}
      />
      <Button
        title="Go to Screen PASSWORD GENERATE"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
}
