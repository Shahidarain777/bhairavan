import { View } from "react-native";
import colors from "../../res/colors";

export default function HorizontalSeparator() {
  return (
    <View
      style={{
        height: 3,
        width: "100%",
        backgroundColor: colors["yellow.200"],
      }}
    ></View>
  );
}
