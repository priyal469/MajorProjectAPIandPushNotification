import React, { Component } from 'react';

import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen';
import requestUserPermission from './src/utils/notificationServices';




const {dispatch}=store

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
componentDidMount(){
  
 requestUserPermission();
  
  getUserData().then(userData=>{
    // setTimeout(()=>{
    //   SplashScreen.hide()
    // },1000)
    // SplashScreen.hide()
    
    if(userData){
      dispatch({
        type:types.LOGIN,
        payload:userData
      })
    }
      
  

  })
}

 
  render() {

    return (
    
        <Provider  store={store}>
        <Routes />
       <FlashMessage/>
        </Provider>
      
      


    )
  }
}