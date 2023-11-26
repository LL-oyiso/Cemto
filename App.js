const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax4 from "./screens/IPhone1415ProMax4";
import Rectangle from "./components/Rectangle";
import IPhone1415ProMax7 from "./screens/IPhone1415ProMax7";
import IPhone1415ProMax13 from "./screens/IPhone1415ProMax13";
import IPhone1415ProMax9 from "./screens/IPhone1415ProMax9";
import IPhone1415ProMax12 from "./screens/IPhone1415ProMax12";
import IPhone1415ProMax6 from "./screens/IPhone1415ProMax6";
import IPhone1415ProMax8 from "./screens/IPhone1415ProMax8";
import IPhone1415ProMax11 from "./screens/IPhone1415ProMax11";
import IPhone1415ProMax14 from "./screens/IPhone1415ProMax14";
import IPhone1415ProMax10 from "./screens/IPhone1415ProMax10";
import IPhone1415ProMax3 from "./screens/IPhone1415ProMax3";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import TeenyiconsshopOutline from "./components/TeenyiconsshopOutline";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415ProMax4"
              component={IPhone1415ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax7"
              component={IPhone1415ProMax7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax13"
              component={IPhone1415ProMax13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax9"
              component={IPhone1415ProMax9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax12"
              component={IPhone1415ProMax12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax6"
              component={IPhone1415ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax8"
              component={IPhone1415ProMax8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax11"
              component={IPhone1415ProMax11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax14"
              component={IPhone1415ProMax14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax10"
              component={IPhone1415ProMax10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax3"
              component={IPhone1415ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax1"
              component={IPhone1415ProMax1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
