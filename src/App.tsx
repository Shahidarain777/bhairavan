import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./common/navigation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded, error] = useFonts({
    Unbounded: require("../assets/fonts/Unbounded-VariableFont_wght.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Navigation colorScheme={"light"} />
      <StatusBar style="light" backgroundColor={"#fff"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7DC9C",
  },
});
