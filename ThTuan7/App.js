import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BeginScreen from "./screens/BeginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shopping from "./screens/Shopping";
import DetailItem from "./screens/DetailItem";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BeginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Shopping"
          component={Shopping}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailItem}
          options={{ headerShown: true }}
        />
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
