import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';

import Loader from '../../Component/Loader';

import actions from "../../redux/actions"
import UserPosts from '../../Component/UserPosts';
import { showMessage } from 'react-native-flash-message';
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import colors from '../../styles/colors';




 export default class Home extends Component{
     constructor(props){
         super(props);
         this.state={
             userPosts:[],
             skipCount:0,
             isLoading:false,
           
         }
     }
     componentDidMount() {
        this.setState({
            isLoading:true
        })
        this.getUserPosts();
    } 
    getUserPosts = () => {
        const {skipCount,userPosts}=this.state;

        actions.getUserSearch({
            searchType:"LEADERBOARD",
            limit:6,
            skip:skipCount
        })
            .then(response => {
                console.log("get response >>>",response)
                this.setState({
                    isLoading:false,
                    userPosts:[...userPosts,...response.data]
                })
            }).catch((error) => {
                showMessage({
                    type: "danger",
                    icon: "danger",
                    message: error.message
                })
            });
            
    }
    _onEndReached =async() => {
        const{skipCount}=this.state;
        
        await this.setState({
            skipCount:skipCount+6,
            isLoading:true
        })
        this.getUserPosts();
    }

   onOpenDrawer=()=>{
       
       const{navigation}=this.props;
       navigation.openDrawer();
   }
     render(){
         const{isLoading,userPosts}=this.state;
         return(
             <WrapperContainer>
             <View style={{flex:1}} >
                 <Header headerText='Mar 2021' onClickMenuIcon={this.onOpenDrawer}/>
              <View style={{flex:1}} >
              <FlatList
                    data={userPosts}
                    numColumns={2}
                    ListFooterComponent={()=><View style={{height:30}}><Loader isLoading={isLoading}/></View>}
                    keyExtractor={(item,index) =>index.toString()}
                    ItemSeparatorComponent={()=><View style={{height:15}}></View>}
                    renderItem={({item}) => <UserPosts data={item} OnNavigate={this.OnNavigate}/>}
                    onEndReached={this._onEndReached}  
                    onEndReachedThreshold={0.9}    
                /> 
              </View>
             </View>
             </WrapperContainer>
         )
     }
 }