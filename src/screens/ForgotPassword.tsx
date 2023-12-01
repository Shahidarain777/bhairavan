
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
export default function ForgotPassword({
  navigation,
}: RootStackScreenProps<"ForgotPassword">) {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingTop: 100 }}
      style={{ flex: 1, backgroundColor: colors["yellow.200"] }}
    >
      <Text
        style={{
          fontSize: 24,
          color: colors["brown.900"],
          fontWeight: "700",
          fontFamily: "Unbounded",
        }}
      >
        Forgot Password?
      </Text>
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
      <Text
        style={{
          fontSize: 15,
          color: colors["brown.900"],
          fontWeight: "600",
          fontFamily: "Unbounded",
          paddingHorizontal: 20,
        }}
      >
        Enter the phone number associated with your account.
      </Text>

      <View
        style={{
          borderBottomColor: colors["brown.900"],
          borderBottomWidth: 1,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Phone Number"
          style={{
            width: 220,
            fontSize: 14,
            padding: 10,
            color: colors["brown.900"],
            textAlign: "center",
            fontFamily: "Unbounded",
          }}
        />
      </View>
      <View style={{ height: 20 }}></View>
     
        <TouchableOpacity onPress={() => navigation.navigate("VerifyForgotOTP")}>
          <PrimaryButton title="Send" />
        </TouchableOpacity>
   
    </ScrollView>
  );
}

// ,
//     "extra": {
//       "router": {
//         "origin": false
//       },
//       "eas": {
//         "projectId": "bb48b371-f414-41b6-ab31-6e95d610598c"
//       }
//     },
//     "runtimeVersion": {
//       "policy": "appVersion"
//     },
//     "updates": {
//       "url": "https://u.expo.dev/bb48b371-f414-41b6-ab31-6e95d610598c"
//     }
