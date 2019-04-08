import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import { MainFeed,Login,Camera,Profile,Register,ForgotPassword } from './components/screens'
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator  } from 'react-navigation';
import Ionicons from 'react-native-ionicons'


//stack to control the Tabs
const HomeTabs = createBottomTabNavigator({
    feed:MainFeed, 
    camera:Camera,
    profile: Profile
},


//for showing icons using react-native-ionicons
{

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'camera') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'profile') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'feed') {
            iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          }



        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
    },
  }




)

//First stack to handle the application outside of login
const AuthenticationStack = StackNavigator({
    login: Login,
    
  

    register: Register,
    forgotPassword:ForgotPassword,


})
//2nd stack to handle the application when Logged in
const MainStack = SwitchNavigator({
    authenticationStack:AuthenticationStack,            //stack for login,register,forgotpassword
    homepage:HomeTabs                                   //stack for tabs when we logged in
})

class InstaClone extends Component {

    render(){
        return( 
            <MainStack/>
        ) 
    }
}


const styles = StyleSheet.create({
    

    tempNav: {
        width:100+'%',
        backgroundColor:"rgb(250,250,250)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"rgb(233,233,233)",
        justifyContent:'center',
        alignItems: 'center',
    },
  
    

})
export default InstaClone;