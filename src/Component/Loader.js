import React,{Component} from "react";
import{View,Text, ActivityIndicator,StyleSheet} from "react-native";
import colors from "../styles/colors";



export default function Loader(props) {
    const{isLoading,size}=props;
        if(isLoading){
            return(
                <View style={styles.loaderView}>
                <ActivityIndicator color={colors.themeColor} size={!!size?size:'large'} /></View>
            )
        }
        else{
            return(
                <View>

                </View>
            )
        }

}
const styles = StyleSheet.create({
    loaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    
})

