import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import PrimaryButton from "../common/components/PrimaryButton";
import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
export default function Perference({
  navigation,
}: RootStackScreenProps<"Perference">) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontFamily: "Unbounded",
            fontSize: 24,
            color: colors["brown.900"],
            fontWeight: "bold",
            marginTop: 100,
            textAlign: "center",
          }}
        >
          Perference
        </Text>

        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 3, height: 150, width: 130 }}
              source={require("../res/images/pngs/play.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 0, height: 150, width: 130 }}
              source={require("../res/images/pngs/Mate.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 70 }}>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 10, height: 150, width: 130 }}
              source={require("../res/images/pngs/Missing.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 150,
              width: 140,
              borderRadius: 15,
              marginHorizontal: 15,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ marginTop: 10, height: 150, width: 130 }}
              source={require("../res/images/pngs/Adopt.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{height:70}}></View>
       
          <TouchableOpacity  onPress={() => navigation.navigate("NotificationServicesSettings")}>
            <PrimaryButton title="Next" />
          </TouchableOpacity>
       
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors["yellow.200"],
    flex: 1,
    alignItems: "center",
  },
});
