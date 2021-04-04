import React,{Component} from "react";
import{View,Text,StyleSheet,TextInput} from "react-native";

import colors from "../styles/colors";


export default function BorderTextInput(props){
    const{placeholder,_onChangeText,inputKey}=props;
    return(
        <TextInput placeholder={placeholder} style={styles.text_input}
       onChangeText={_onChangeText(inputKey)}  maxLength = {10}
        />
    )
}
const styles=StyleSheet.create({
    text_input:{
       borderWidth:1,
       borderColor:colors.themeColor,
       borderRadius:6,
        width:'100%',
        marginTop:80
    }
})
