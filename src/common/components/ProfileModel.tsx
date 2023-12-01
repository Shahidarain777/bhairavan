import { FontAwesome } from "@expo/vector-icons";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import colors from "../../res/colors";

interface Props {
  visible: boolean;
  onCancel(): void;
}

export default function ProfileModal({ visible, onCancel }: Props) {
  const Row = ({ text, icon }: any) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 18,
        borderBottomColor: colors["brown.200"],
        borderBottomWidth: 1,
      }}
    >
      <FontAwesome size={24} color={colors["brown.900"]} name={icon} />
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Unbounded",
          fontWeight: "500",
          paddingHorizontal: 10,
        }}
      >
        {text}
      </Text>
    </View>
  );

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onCancel}
      supportedOrientations={["portrait", "landscape"]}
    >
      <View style={{ flex: 1, alignItems: "center", top: 130 }}>
        <TouchableOpacity
          onPress={onCancel}
          style={{
            height: 36,
            width: 36,
            borderWidth: 4,
            alignSelf: "flex-end",
            right: "5%",
            bottom: -0,
            borderRadius: 18,
            backgroundColor: colors["yellow.200"],
            borderColor: colors["brown.900"],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome color={colors["brown.900"]} name={"close"} size={20} />
        </TouchableOpacity>
        <View
          style={{
            width: "80%",
            backgroundColor: colors["yellow.200"],
            borderRadius: 8,
            borderColor: colors["brown.900"],
            borderWidth: 4,
          }}
        >
          {/* <Link href="ProfileSetting" asChild> */}
          <Pressable onPress={onCancel}>
            <Row icon={"user-circle-o"} text={"Profile Settings"} />
          </Pressable>
          {/* </Link> */}
          {/* <Link href="ChangePassword" asChild> */}
          <Pressable onPress={onCancel}>
            <Row icon={"lock"} text={"Change Password"} />
          </Pressable>
          {/* </Link> */}
          {/* <Link href="Login" replace asChild> */}
          <Pressable
            onPress={() => {
              onCancel();
              // router.replace("/");
            }}
          >
            <Row icon={"power-off"} text={"Logout"} />
          </Pressable>
          {/* </Link> */}
        </View>
      </View>
    </Modal>
  );
}
