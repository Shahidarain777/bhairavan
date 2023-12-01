import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../common/components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../res/colors";

export default function Login() {
  const navigation = useNavigation();

  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: colors["yellow.200"] }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Image
          style={{
            alignSelf: "flex-start",
            position: "absolute",
          }}
          source={require("../res/images/pngs/footprint_small.png")}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors["brown.900"],
            fontFamily: "Unbounded",
          }}
        >
          LOG IN
        </Text>
        <View style={{ height: 40 }}></View>
        <View>
          <View
            style={{
              backgroundColor: colors["brown.200"],
              width: 240,
              padding: 14,
              borderRadius: 8,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 18, fontFamily: "Unbounded" }}
              placeholder="Phone Number"
            />
          </View>
          <View
            style={{
              backgroundColor: colors["brown.200"],
              width: 240,
              padding: 14,
              borderRadius: 8,
              margin: 4,
              flexDirection: "row",
            }}
          >
            <TextInput
              secureTextEntry={!passwordHidden}
              style={{ flex: 1, fontSize: 18, fontFamily: "Unbounded" }}
              placeholder="Password"
            />
            <FontAwesome
              onPress={() => setPasswordHidden(!passwordHidden)}
              name={passwordHidden ? "eye" : "eye-slash"}
              color={"#444"}
              size={20}
            />
          </View>
        
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 8,
                padding: 10,
                fontFamily: "Unbounded",
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
         
        </View>
        <View style={{ height: 38 }}></View>
        {/* <Link href="(tabs)" asChild> */}
        <Pressable>
          <PrimaryButton title="Login" />
        </Pressable>
        {/* </Link> */}
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors["brown.900"],
              fontFamily: "Unbounded",
            }}
          >
            Don’t have an account?
          </Text>
          {/* <Link href={{ pathname: "Registration" }} asChild> */}
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "800",
                color: colors["brown.900"],
                fontFamily: "Unbounded",
                justifyContent: "center",
              }}
            >
              {" "}
              Create
            </Text>
          </TouchableOpacity>
          {/* </Link> */}
        </View>
      </ScrollView>
      <Image
        style={{ alignSelf: "center", position: "absolute", top: 650 }}
        source={require("../res/images/pngs/footprint_large.png")}
      />
    </View>
  );
}
