import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";
export default function AddPicture() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 24,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 110,
          }}
        >
          Add Picture
        </Text>

        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 16,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 25,
          }}
        >
          1. Owner and Dog
        </Text>

        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: colors["brown.900"],
            paddingLeft: 60,
            paddingTop: 55,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <FontAwesome name={"camera"} color={"#999"} size={30} />
        </View>

        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 16,
            color: colors["brown.900"],
            fontWeight: "600",
            marginTop: 25,
          }}
        >
          2. Only Dog
        </Text>

        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: colors["brown.900"],
            paddingLeft: 60,
            paddingTop: 55,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <FontAwesome name={"camera"} color={"#999"} size={30} />
        </View>

        <View style={{ height: 20, marginTop: 40 }}></View>
        {/* <Link href={{ pathname: "AddGender" }} asChild> */}
        <Pressable>
          <PrimaryButton title="Next" />
        </Pressable>
        {/* </Link> */}
      </ScrollView>
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
