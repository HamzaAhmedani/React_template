import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {PostFeed} from '../container';

import config from '../../config';




class InstaClone extends Component {



 

    render(){
      
        return(
            <View style={{flex:1, width:100+'%',height:100+'%' }}>
                <View style={styles.tempNav}> 
                    <Text>Instagram</Text>

                   

                </View>
                <PostFeed/> 

        
            </View>

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