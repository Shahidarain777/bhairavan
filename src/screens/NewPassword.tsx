import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
export default function NewPassword({
  navigation,
}: RootStackScreenProps<"NewPassword">) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: colors["yellow.200"] }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors["brown.900"],
            fontFamily: "Unbounded",
          }}
        >
          New password
        </Text>
        <View style={{ height: 40 }}></View>
        <View>
          <Text
            style={{
              paddingHorizontal: 4,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Unbounded",
            }}
          >
            Enter New Password
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 14, fontFamily: "Unbounded" }}
              placeholder="8 symbols at least"
            />
          </View>
          <Text
            style={{
              paddingHorizontal: 4,
              fontSize: 14,
              fontWeight: "700",
              paddingTop: 10,
              fontFamily: "Unbounded",
            }}
          >
            Confirm password
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: colors["brown.200"],
              width: 240,
              padding: 10,
              borderRadius: 4,
              margin: 4,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 14, fontFamily: "Unbounded" }}
              placeholder="8 symbols at least"
            />
            <FontAwesome name={"eye"} color={"#444"} size={18} />
          </View>
        </View>
        <View style={{ height: 38 }}></View>

        <TouchableOpacity
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "Root" }] })
          }
        >
          <PrimaryButton title="Submit" />
        </TouchableOpacity>
      </ScrollView>
      <Image
        style={{ alignSelf: "flex-end", position: "absolute", top: 515 }}
        source={require("../res/images/pngs/footprint_rotated.png")}
      />
    </View>
  );
}
