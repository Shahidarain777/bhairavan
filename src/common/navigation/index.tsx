import React from "react";
import { ColorSchemeName, Dimensions, Platform, View } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { navigationRef } from "./NavigationRef";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "../types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import Registration from "../../screens/Registration";
import Otp from "../../screens/Otp";
import AddOwner from "../../screens/AddOwner";
import AddPicture from "../../screens/AddPicture";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator isUserLoggedIn={false} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const RootNavigator = React.memo(function ({
  isUserLoggedIn,
}: {
  isUserLoggedIn: boolean;
}) {
  return (
    <Stack.Navigator initialRouteName={isUserLoggedIn ? "Root" : "Login"}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddOwner"
        component={AddOwner}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPicture"
        component={AddPicture}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
});

function DrawerNavigator() {
  const getDrawerWidth = () => {
    if (Platform.OS === "ios") return 300;
    if (Dimensions.get("screen").width >= 400) return 320;
    return 290;
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: getDrawerWidth(),
        },
        headerShown: false,
      }}
      drawerContent={({ navigation }) => <View></View>}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
