import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
export default function NotificationServicesSettings({
  navigation,
}: RootStackScreenProps<"NotificationServicesSettings">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabledd, setIsEnabledd] = useState(false);
  const toggleSwitchh = () => setIsEnabledd((previousState) => !previousState);
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 60,
      }}
      style={{ flex: 1, backgroundColor: colors["yellow.200"] }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "Root" }] })
          }
        >
          <Text
            style={{
              textAlign: "right",
              fontSize: 15,
              fontFamily: "Unbounded",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: colors["yellow.500"],
          width: 200,
          height: 200,
          justifyContent: "center",
          borderRadius: 100,
          margin: 40,
        }}
      >
        <Image
          style={{ marginBottom: 20 }}
          source={require("../res/images/bhairavan_logo.png")}
        />
      </View>

      <Text style={{ fontSize: 24, fontFamily: "Unbounded" }}>
        Almost Finished
      </Text>

      <Text
        style={{
          textAlign: "center",
          color: colors["brown.200"],
          fontSize: 12,
          fontFamily: "Unbounded",
          padding: 8,
        }}
      >
        We just need a few more things before you get started with discount.
      </Text>

      <View style={{ height: 40 }}></View>
      <View
        style={{
          borderTopColor: colors["brown.200"],
          borderTopWidth: 1,
          borderBottomColor: colors["brown.200"],
          borderBottomWidth: 1,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{ fontFamily: "Unbounded", fontSize: 13, fontWeight: "700" }}
        >
          Enable Notification
        </Text>

        <Switch
          trackColor={{
            false: colors["brown.200"],
            true: colors["brown.900"],
          }}
          thumbColor={isEnabled ? colors["yellow.500"] : "#FFF"}
          ios_backgroundColor={colors["brown.200"]}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={{
          borderTopColor: colors["brown.200"],
          borderTopWidth: 1,
          borderBottomColor: colors["brown.200"],
          borderBottomWidth: 1,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{ fontFamily: "Unbounded", fontSize: 13, fontWeight: "700" }}
        >
          Enable Location Services
        </Text>

        <Switch
          trackColor={{
            false: colors["brown.200"],
            true: colors["brown.900"],
          }}
          thumbColor={isEnabledd ? colors["yellow.500"] : "#FFF"}
          ios_backgroundColor={colors["brown.200"]}
          onValueChange={toggleSwitchh}
          value={isEnabledd}
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          color: colors["brown.200"],
          fontSize: 10,
          fontFamily: "Unbounded",
          padding: 8,
        }}
      >
        Enabling notification and location services allow us to better deliver
        and keep you informed.
      </Text>
    </ScrollView>
  );
}
