import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BeginScreen from "./screen/BeginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import CreatePost from "./screen/CreatePost";
import RegisScreen from "./screen/RegisScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Begin"
          component={BeginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create"
          component={CreatePost}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Reg"
          component={RegisScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
