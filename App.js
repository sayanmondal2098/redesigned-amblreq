import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import LoginScreen from "./screens/LoginScreen";
import Mapview from "./screens/Mapview";
import SignupScreen from "./screens/SignupScreen";
import FareDetails from "./screens/FareDetails";
import MapScreen from "./screens/MapScreen";
import Test from "./screens/Test";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Discover"
            component={Discover}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="FareDetails"
            component={FareDetails}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Mapview"
            component={Mapview}
          />

          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false
            }}
          />


          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
