import { FontAwesome } from "@expo/vector-icons";

import { View, Image, Text } from "react-native";
import colors from "../../res/colors";

export default function DrawerMenu() {
  const Row = ({ image, text }: any) => (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: colors["brown.900"],
        paddingVertical: 20,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <FontAwesome
        style={{ bottom: -2 }}
        name="circle"
        size={14}
        color={colors["yellow.500"]}
      />
      <Text
        style={{
          fontSize: 22,
          fontFamily: "Unbounded",
          fontWeight: "500",
          paddingLeft: 10,
          color: colors["yellow.500"],
        }}
      >
        {text}
      </Text>
    </View>
  );

  return (
    <View style={{ backgroundColor: colors["yellow.200"], flex: 1 }}>
      <View
        style={{
          height: 240,
          width: "100%",
          backgroundColor: colors["brown.900"],
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginRight: 20,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors["yellow.500"],
              height: 60,
              width: 60,
              borderWidth: 2,
              borderRadius: 30,
              paddingTop: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ marginTop: 0, height: 36, width: 36, marginBottom: 4 }}
              source={require("../../res/images/pngs/black-foot.png")}
            />
          </View>
          <Text
            style={{
              bottom: -6,
              paddingHorizontal: 10,
              fontSize: 24,
              fontFamily: "Unbounded",
              color: colors["yellow.500"],
              fontWeight: "600",
            }}
          >
            Bhairavan
          </Text>
        </View>
      </View>
      <View style={{ height: 40 }}></View>
      <Row text={"Play"} />
      <Row text={"Mate"} />
      <Row text={"Adopt"} />
      <Row text={"Missing"} />
    </View>
  );
}
