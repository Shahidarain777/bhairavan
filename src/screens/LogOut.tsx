import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
  } from "react-native";
  
  import PrimaryButton from "../common/components/PrimaryButton";

  import colors from "../res/colors";
  import PrimaryButtonSquare from "../common/components/PrimaryButtonSquare";
import { RootStackScreenProps } from "../common/types";
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  export default function LogOut({
    navigation,
  }: RootStackScreenProps<"LogOut">) {
   
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
            marginRight:120,
            marginTop:6,
            marginLeft:10
           
            
          }}
        >
        LogOut
        </Text>
        </View>
        
        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 2,
            marginVertical: 20,
            alignItems: "center",
            marginTop:0,
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
          
        <View style={{backgroundColor:'gray', height:300,width:300, borderWidth:5, marginTop:50}}>
        <Text
          style={{
            fontSize: 20,
            color: colors["brown.900"],
            fontWeight: "bold",
            textAlign:'center',
            marginTop:20,
            marginLeft:10
           
            
          }}
        >
        Log Out?
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors["brown.900"],
            fontWeight: "bold",
            textAlign:'center',
            marginTop:5,
            marginLeft:10
        
          }}
        >
        Are you sure what to log out?
        </Text>
        <View style={{flexDirection:'row',marginTop:110}}>
          <View style={{marginLeft:30,}}>
      
            <Pressable>
              <PrimaryButtonSquare title="Cancel" />
            </Pressable>
         
          </View>
          <View style={{  marginHorizontal:22,}}>
         
            <Pressable>
              <PrimaryButtonSquare title="Log out" />
            </Pressable>
       
          </View>
          </View>
        </View>
        
       
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
  