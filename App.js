import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import Mapview from "./screens/Mapview";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Mapview" component={Mapview} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
