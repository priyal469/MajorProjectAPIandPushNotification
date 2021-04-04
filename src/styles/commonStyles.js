import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
// import fontFamily from './fontFamily';

export default StyleSheet.create({
   fontSize10:{
        fontSize:10,
        color:colors.textGreyLight,
         fontFamily:fontFamily.regular
       
    },
    
   fontSize20:{
        fontSize:20,
        color:colors.black,
       
        fontFamily:fontFamily.semibold
    }
})