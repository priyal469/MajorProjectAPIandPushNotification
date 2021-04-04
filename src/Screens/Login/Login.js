import React,{Component} from 'react';
import {View,Text,StatusBar,Image} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import BorderTextInput from '../../Component/BorderTextInput';
import SimpleBtn from '../../Component/SimpleBtn';
import colors from '../../styles/colors';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import Loader from '../../Component/Loader';
import validator from '../../utils/validation';
import { showMessage } from 'react-native-flash-message';
import actions from '../../redux/actions';

 export default class Login extends Component{
     constructor(props){
         super(props);
         this.state={
             isLoading:false,
           phoneNumber:'',
         }
     }
     onMove=()=>{
         const{navigation}=this.props;
         navigation.navigate(navigationStrings.OTP_VERIFICATION)
     }

     _onChangeText=(key)=>{
         return (value)=>{
            this.setState({
                [key]:value,
            })
            
         }
        }
     isValidData=()=>{
         const{phoneNumber}=this.state;
         const error=validator({phoneNumber:phoneNumber })
         if(error){
             showMessage({
                type: 'danger',
                icon: 'danger',
                message: error,
             });
             return false;
         }
         else{
             return true;
         }
     }
     _onSendOtp = () => {
        const { phoneNumber } = this.state;
        const { navigation } = this.props;
        if (this.isValidData()) {
            this.setState({
                isLoading: true,
            });

            actions.onSendOTP({
                contactDetails: {
                    phoneNo: phoneNumber,
                    countryCode: '+91',
                    countryCodeISO: "IN"
                }
            })
                .then(res => {
                    this.setState({
                         
                        isLoading: true
                    });
                    console.log(res,"UserID////////////")
                    showMessage({
                        type: 'success',
                        icon: 'success',
                        message: 'OTP sent successfully',
                    });
                    navigation.navigate(navigationStrings.OTP_VERIFICATION,{ userId:res.data.userId,})
                })
                .catch(error => {
                    this.setState({

                        isLoading: false
                    });
                    showMessage({
                        type: 'danger',
                        icon: 'danger',
                        message: error.message,
                    });
                });
        }
    };

     render(){
         const{isLoading}=this.state;
         return(
            <View style={styles.mainView}>
            <StatusBar backgroundColor={colors.themeColor} />

            <Image source={imagePath.appLogo} style={styles.appLogo} />
            <Text style={styles.login_text}>Login</Text>
            <Text style={styles.otpText1}>We will send you a One Time Password on your</Text>
            <Text style={styles.otpText2}>phone number</Text>
            <BorderTextInput placeholder={strings.ENTER_YOUR_NUMBER} _onChangeText={this._onChangeText} inputKey={'phoneNumber'} />
            <SimpleBtn simpleBtn_Text={strings.GET_OTP} onPresSimpleBtn={this._onSendOtp} />
           <Loader isLoading={isLoading}/>
        </View>
         )
     }
 }