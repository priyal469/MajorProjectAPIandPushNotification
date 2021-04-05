import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import { Home, SearchPosts } from '../Screens';
import React from "react"
import {View,Image,Text} from "react-native"
import colors from '../styles/colors';
import DrawerRoutes from './DrawerRoutes';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.HOME} component={Home}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.homeIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
              Home
            </Text>
          ),
      }}
      />
      <Tab.Screen name={navigationStrings.SEARCH_POSTS} component={SearchPosts}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.searchIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
              Search
            </Text>
          ),
      }}
      />
     
    </Tab.Navigator>
  );
}