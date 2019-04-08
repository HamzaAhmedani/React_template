import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import  config  from '../../config';




class Post extends Component {

    constructor(){
        super();
            this.state ={
                liked:false,
                screenWidth:Dimensions.get("window").width+30,

            }


    }

    

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }


    render(){
        console.log(this.props.item)
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
                console.log(imageHeight);
        
        const imageSelection = this.props.item % 2 === 0 ? "https://lh3.googleusercontent.com/x5Y-I4Qh9d-GxWruCy13POzojNVYiT_vbRLWCFlv_0ZtDNMUu5fLh-MmK5NuCPJgGvl2iL9efTcc2cqYvng7B7joUw" : "https://lh3.googleusercontent.com/uDNrgGAiCBX88kYKvv7QPSr-QNmiazMQR_JZr91P1Kqz-l4ZEAWfRpkwju_2ajPxS1qoWc8yOqkUApGC1C6mrB00Tw"

        const imageUri = imageSelection  + '=s' + imageHeight + '-c';


        const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)': null

        return(
         <View >


            <View style={styles.userBar}>

                        <View style={{flexDirection:"row",alignItems: 'center', width:100+'%'}}>
                            <Image style={styles.userPic}
                            source={{
                                uri:
                                'https://lh3.googleusercontent.com/bpZST9U7bEsReuE6y01-k7gFtyCdpA-4Vrje_H52oJiaWkipTsleqX6W31Jwi7pN1BlLph-zYSoeAHeMnbm2SDrR'}} />
                        
                                <Text style={{marginLeft:10}}>Uxman</Text>
                            </View>

                            <View style={{alignItems: 'center',}}>
                                <Text style={{fontSize: 28,}}>
                                ...
                                </Text>
                            </View>
             </View>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    
                    onPress={()=>
                         {
                             this.likeToggled();
                        }}>

                <Image style={{width:this.state.screenWidth, height: 350}}
                source={{
                    uri:imageUri
                   }} />
                   </TouchableOpacity>
                   
                   <View style={styles.iconBar}>

                    <Image 
                    
                    style={[styles.icon,{height:40,width:40, tintColor:heartIconColor}]} source={config.images.heartIcon}/>

                    <Image style={[styles.icon,{height:36,width:36}]}  source={config.images.bubbleIcon}/>

                    <Image
                    resizeMode="stretch"
                    style={[styles.icon,{height:40,width:40}]}  source={config.images.arrowIcon}/>
                    
                   </View>
                   <View style={styles.iconBar}>
                        <Image
                        style={[styles.icon,{height:30,width:30}]} source={config.images.heartIcon}/>

                        <Text>
                        128 Likes
                   </Text>
                   </View>
                  
        </View>

        )
    }
}


const styles = StyleSheet.create({
    

    tempNav: {
        width:100+'%',
        height:55,
        backgroundColor:"rgb(250,250,250)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"rgb(233,233,233)",
        justifyContent:'center',
        alignItems: 'center',
    },
    userBar:{
        paddingHorizontal: 15,
        width:100+"%",
        height:config.styleConstants.rowHeight,
        backgroundColor:"rgb(255,255,255)",
        flexDirection:"row",
        justifyContent:'space-between'
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20 ,

    },
    iconBar:{
        height:config.styleConstants.rowHeight,
        width:100 + "%",
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:"rgb(233,255,233)",
        flexDirection:"row",
        alignItems: 'center',
    },
    icon:{
        marginLeft: 10,

    },

    

})
export default Post;