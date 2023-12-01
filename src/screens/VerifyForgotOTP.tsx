
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
export default function VerifyForgotOTP({
  navigation,
}: RootStackScreenProps<"VerifyForgotOTP">) {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 60,
        paddingHorizontal: 20,
      }}
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
        Verification
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
        }}
      >
        Enter the verification code we just sent you on your phone number.
      </Text>

      <CodeInput
        // ref={codeRef}
        // secureTextEntry
        activeColor={colors["brown.900"]}
        inactiveColor={colors["brown.200"]}
        autoFocus={true}
        keyboardType="numeric"
        codeLength={4}
        className="border-b"
        size={45}
        disableFullscreenUI={true}
        onFulfill={(isValid: any) => {
          console.log("isValid", isValid);
        }}
        containerStyle={{ marginVertical: 56 }}
        codeInputStyle={{
          //   borderWidth: 1,
          borderColor: colors["brown.900"],
          fontSize: 24,
          fontFamily: "Unbounded",
          height: 56,
        }}
      />
      <View style={{ height: 20 }}></View>
      
        <TouchableOpacity onPress={() => navigation.navigate("NewPassword")}>
          <PrimaryButton title="Verify" />
        </TouchableOpacity>
     
    </ScrollView>
  );
}
