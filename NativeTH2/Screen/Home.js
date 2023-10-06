import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Screen Login"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Go to Review"
        onPress={() => navigation.navigate("Screen2")}
      />
      <Button
        title="Go to Screen PASSWORD GENERATE"
        onPress={() => navigation.navigate("Screen3")}
      />

      <Button
        title="Go to Screen Shopping TiKi"
        onPress={() => navigation.navigate("Screen4")}
      />
    </View>
  );
}
