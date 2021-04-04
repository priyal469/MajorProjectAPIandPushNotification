import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import navigationStrings from '../constants/navigationStrings';


import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';


export default function UserPosts(props) {
   const { data,OnNavigate} = props;
   return (
      <View style={styles.userPostView}>
        
            <Image source={{ uri: data.profileImg[1].original }} style={styles.userPostImage} />
            
         <Text style={styles.fullName}>{data.fullName}</Text>
         <Text>{data.gender}</Text>
         <TouchableOpacity onPress={OnNavigate}>
         <Text>{data.addressDetails.city}</Text>
         </TouchableOpacity>

      </View>
   )
}
const styles = StyleSheet.create({
   userPostView: {

      // borderWidth:1,
      borderColor: colors.black,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%'
   },
   userPostImage: {
      height: 80,
      width: '100%',
      borderRadius: 50,
      resizeMode: 'contain',
      marginTop: 13
   },
   fullName: {
    fontFamily:fontFamily.bold
   }
})