import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import DrawerRoutes from "./DrawerRoutes";




const Stack=createStackNavigator();

export default function MainStack(){

    return(
        <React.Fragment>
              
           
                 <Stack.Screen name={navigationStrings.DRAWER_ROUTES} component={DrawerRoutes}
                   options={{
                       headerShown:false
                   }}/>
        </React.Fragment>
    )

}