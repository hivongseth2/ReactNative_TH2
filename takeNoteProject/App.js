import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BeginScreen from "./screen/BeginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
// import HomeScreen from "./screen/HomeScreen";
// import AddScreen from "./screen/AddScreen";

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

        {/* <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ headerShown: false }}
        />  */}
      </Stack.Navigator>

      {/* <BeginScreen /> */}
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
