import { FontAwesome } from "@expo/vector-icons";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import colors from "../../res/colors";
import { useNavigation } from "@react-navigation/native";
interface Props {
  visible: boolean;
  onCancel(): void;
}

export default function ProfileModal({ visible, onCancel }: Props) {
  const navigation=useNavigation();
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
          
          <TouchableOpacity onPress={()=>{onCancel();navigation.navigate('ProfileSetting')}}>
            <Row icon={"user-circle-o"} text={"Profile Settings"} />
          </TouchableOpacity>
          
         
          <TouchableOpacity onPress={()=>{onCancel();navigation.navigate('ChangePassword')}}>
            <Row icon={"lock"} text={"Change Password"} />
          </TouchableOpacity>
        
         
          <TouchableOpacity  onPress={()=>{onCancel();navigation.navigate('LogOut')}}>
            
            <Row icon={"power-off"} text={"Logout"} />
          </TouchableOpacity>
         
        </View>
      </View>
    </Modal>
  );
}
