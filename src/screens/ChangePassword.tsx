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
  import colors from "../res/colors";
import { RootStackScreenProps } from "../common/types";
  export default function ChangePassword({
    navigation,
  }: RootStackScreenProps<"ChangePassword">) {
  
    return (
      
      <View style={{ flex: 1, }}>
        
        <ScrollView contentContainerStyle={styles.container}>
       
        <View style={{ flexDirection:'row', marginTop:70,}}>
        <View style={{  backgroundColor: colors["yellow.500"],height:45,width:45,borderWidth:2,borderRadius:30,paddingTop:5,alignItems:'center'}}>
        <Image
        style={{marginTop:0 ,height:30,width:30,}}
        source={require("../res/images/pngs/black-foot.png")}
      />
      </View>

      
        <Text
          style={{
            fontSize: 22,
            color: colors["brown.900"],
            fontWeight: "bold",
            textAlign:'center',
            marginTop:6,
            marginLeft:10
           
            
          }}
        >
        Change Password
        </Text>
        </View>
        
        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 2,
            marginVertical: 20,
            alignItems: "center",
           
          }}
        >
          <Text
            style={{
              width: 360,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 15,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginTop:50,
          }}
        >
          Current Password
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
              marginTop:-30
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 15,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginTop:90,
          }}
        >
          New Password
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
              marginTop:-30
            }}
          />
        </View>


      <View style={{height:50}}></View>
        
         
            <TouchableOpacity>
              <PrimaryButton title="Save" />
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
  