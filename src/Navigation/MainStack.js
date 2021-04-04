import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";




const Stack=createStackNavigator();

export default function MainStack(){

    return(
        <React.Fragment>
             
                   <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes}
                   options={{
                       headerShown:false
                   }}/>    
                     {/* <Stack.Screen name={navigationStrings.HOME} component={Home} options={{
                headerShown:false}} ></Stack.Screen>

<Stack.Screen name={navigationStrings.SEARCH_POSTS} component={SearchPosts} options={{
                headerShown:false}} ></Stack.Screen> */}

        </React.Fragment>
    )

}