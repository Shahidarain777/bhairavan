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
import DrawerMenu from "../components/DrawerMenu";
import AddGender from "../../screens/AddGender";
import DogAge from "../../screens/DogAge";
import Perference from "../../screens/Perference";
import NotificationServicesSettings from "../../screens/NotificationServicesSettings";
import ForgotPassword from "../../screens/ForgotPassword";
import VerifyForgotOTP from "../../screens/VerifyForgotOTP";
import NewPassword from "../../screens/NewPassword";
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
        name="AddGender"
        component={AddGender}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DogAge"
        component={DogAge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perference"
        component={Perference}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationServicesSettings"
        component={NotificationServicesSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyForgotOTP"
        component={VerifyForgotOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
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
      drawerContent={({ navigation }) => <DrawerMenu />}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
