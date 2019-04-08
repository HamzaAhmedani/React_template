import React, {Component} from 'react'
import {View,Text,TouchableOpacity } from 'react-native'

class Profile extends Component{



    login(){
        //Navigate to Next Page

        this.props.navigation.navigate("main")

    }


    render(){
        return (
            <TouchableOpacity style={
                {
                    width:100+'%',
                    height:100+'%',
                    justifyContent:'center',
                    flex:1,
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>
                    
                    this.login()
                }
                >
                <Text>Profile Page</Text>
            </TouchableOpacity>
        )
    }



}
export default Profile;