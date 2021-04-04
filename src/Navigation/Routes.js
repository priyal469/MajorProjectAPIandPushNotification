import React,{useContext} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import {connect} from 'react-redux';
const Stack=createStackNavigator();

 function Routes(props){
    const{userdata}=props;
    console.log(userdata,"userdatain routes>>>>>>>.")
    return(
    
<NavigationContainer>
    <Stack.Navigator>
{ !!userdata.accessToken?<>{MainStack()}</>:<>{AuthStack()}</>}
         
    </Stack.Navigator>
</NavigationContainer>
    )
}

const mapStateToProps=state=>({
         userdata:state.auth.userData
})
export default connect(mapStateToProps)(Routes)