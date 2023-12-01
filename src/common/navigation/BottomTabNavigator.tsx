import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../res/colors";
import HomeScreen from "../../screens/tabs/HomeScreen";
import SettingsScreen from "../../screens/tabs/SettingsScreen";
import ProfileModal from "../components/ProfileModel";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const [visible, setVisible] = useState(false);

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors["brown.900"],
        tabBarInactiveTintColor: colors["brown.200"],
        tabBarLabelStyle: { fontFamily: "Unbounded" },
        tabBarStyle: {
          backgroundColor: colors["yellow.500"],
          borderTopWidth: 1,
          borderTopColor: colors["brown.900"],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarStyle: {
            backgroundColor: colors["yellow.500"],
            borderTopColor: colors["brown.900"],
            borderTopWidth: 1,
          },
          headerTransparent: true,
          headerBackgroundContainerStyle: {
            backgroundColor: colors["yellow.200"],
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{ marginRight: 20, alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: colors["yellow.500"],
                  height: 34,
                  width: 34,
                  borderWidth: 2,
                  borderRadius: 30,
                  paddingTop: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ marginTop: 0, height: 22, width: 22 }}
                  source={require("../../res/images/pngs/black-foot.png")}
                />
              </View>
              <Text
                style={{
                  fontFamily: "Unbounded",
                  fontSize: 10,
                  fontWeight: "400",
                }}
              >
                Profile
              </Text>
              <ProfileModal
                visible={visible}
                onCancel={() => setVisible(!visible)}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <DrawerToggleButton tintColor={colors["brown.900"]} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={SettingsScreen}
        options={{
          title: "Notifications ",
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: "Settings ",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
      <Tab.Screen
        name="logout"
        component={SettingsScreen}
        options={{
          title: "Logout ",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="power-off" color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
