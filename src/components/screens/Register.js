import React, {Component} from 'react'
import {View,Text,TouchableOpacity,TextInput,Button,StyleSheet } from 'react-native'

class Register extends Component{
    constructor(){
        super();
        this.state = {
            credentials: {
                login:"",
                password:""
            }
        }
    }

    updateText(text,field){
        let newCredentials= Object.assign(this.state.credentials);
        newCredentials[field] = text
        this.setState({
            credentials: newCredentials
        })

    }

    register(){
        this.props.navigation.navigate("main");

    }


    render(){
        return (
            <View style={
                {
                    width:100+'%',
                    height:100+'%',
                    justifyContent:'center',
                    flex:1,
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor:"rgb(252,61,57)"
                }} 
                >
                <Text>Register PAGE</Text>

                <TextInput
                    value={this.state.login}
                 placeholder="USERNAME" style={styles.input}
                 onChangeText={text => this.updateText(text,"login")}
                 />
                <TextInput
                    autoCorrect={false}
                    value={this.state.password} 
                    secureTextEntry placeholder="PASSWORD" style={styles.input}
                    onChangeText={text => this.updateText(text,"password")}

                />

                <Button onPress={() => 
                    this.register()
                } title="SignUp" />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    

    input: {
            width: 100 + '%',
            height: 50,
            paddingHorizontal: 50,
            backgroundColor: 'rgb(255,255,255)',
            marginBottom: 10,
     

    },
  
    

})
export default Register;