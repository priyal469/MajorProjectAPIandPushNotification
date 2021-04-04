import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import navigationStrings from "../constants/navigationStrings";
import { Login, OtpVerification } from "../Screens";




const Stack=createStackNavigator();

export default function AuthStack(){

    return(
        <React.Fragment>
            
             <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}} />
             <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification} options={{headerShown:false}} />
            

            
                
                
                     
           
        </React.Fragment>
    )

}