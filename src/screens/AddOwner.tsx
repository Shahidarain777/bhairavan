import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import PrimaryButton from "../common/components/PrimaryButton";
import { RootStackScreenProps } from "../common/types";
import colors from "../res/colors";
export default function AddOwner({
  navigation,
}: RootStackScreenProps<"AddOwner">) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{
            width: 100,
            alignSelf: "flex-end",
            position: "absolute",
            top: 150,
          }}
          source={require("../res/images/pngs/footprint_small.png")}
        />

        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 18,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 150,
          }}
        >
          Dog Owner Name?
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 4,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontFamily: "Unbounded",
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 18,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 50,
          }}
        >
          Whats is your dog's name?
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 4,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontFamily: "Unbounded",
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <View style={{ height: 20 }}></View>
        {/* <Link href={{ pathname: "AddPicture" }} asChild> */}
        <TouchableOpacity onPress={() => navigation.navigate("AddPicture")}>
          <PrimaryButton title="Next" />
        </TouchableOpacity>
        {/* </Link> */}

        <View style={{ height: 20 }}></View>
        {/* <Link href={{ pathname: "Perference" }} asChild> */}
        <TouchableOpacity onPress={() => navigation.navigate("Perference")}>
          <PrimaryButton title="Don't have a dog" />
        </TouchableOpacity>
        {/* </Link> */}
      </ScrollView>
      <Image
        style={{
          width: 100,
          alignSelf: "flex-end",
          position: "absolute",
          top: 450,
        }}
        source={require("../res/images/pngs/footprint_small.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["yellow.200"],
    flex: 1,
    alignItems: "center",
  },
});
