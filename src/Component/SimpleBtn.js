import React,{Component} from "react";
import{View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import colors from "../styles/colors";


export default function SimpleBtn(props){
const{onPresSimpleBtn,simpleBtn_Text}=props;
return(
<TouchableOpacity onPress={onPresSimpleBtn} style={styles.touchable_btn}  >
    <Text style={styles.touchable_btn_text}>
{simpleBtn_Text}
    </Text>
</TouchableOpacity>
)
}

const styles=StyleSheet.create({
touchable_btn:{
    height:45,
    width:'100%',
    backgroundColor:colors.textBlue,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:50
   
    
},
touchable_btn_text:{
    color:colors.white,
    fontSize:12
   
}
})