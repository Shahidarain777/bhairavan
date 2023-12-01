import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import colors from "../../res/colors";

interface Props {
  title: string;
}

export default function PrimaryButtonSquare({ title }: Props) {
  return (
    <View
      style={{
        backgroundColor: colors["yellow.500"],
        borderRadius: 12,
        paddingHorizontal: 20,
        maxWidth: 120,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          paddingVertical: 16,
          color: colors["brown.900"],
          fontFamily: "Unbounded",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
