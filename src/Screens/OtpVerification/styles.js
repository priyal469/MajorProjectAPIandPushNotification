import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';



export default StyleSheet.create({
    mainView:{
        flex:1,
        padding:20
    },
   appLogo:{
      alignSelf:'center',
        height:70,
        width:'100%',
        resizeMode:'contain',
        marginTop:50
    },
    verification_text:{
       
        ...commonStyles.fontSize20,
       
       
        alignSelf:'center',
        marginTop:10
    },
    otpText1:{
        ...commonStyles.fontSize10,
          alignSelf:'center',
          marginTop:10
      },
   
})