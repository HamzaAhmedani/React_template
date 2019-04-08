import React, {Component} from 'react'
import {View,Text,TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native'

class Login extends Component{

    //to make the header hide at Login Page ONLY
    static navigationOptions = {
        header: null
    }


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

 
    gotoRegisterPage(){
        this.props.navigation.navigate("register");

    }
    gotoForgetPassword(){
        this.props.navigation.navigate("forgotPassword");

    }

    gotoHomePage(){
        this.props.navigation.navigate("homepage");

    }

  






    render(){
        return (
            <View style={styles.mainViewStyle}>

                    <Image>Login PAGE</Image>

                            <TextInput
                                value={this.state.login}
                                placeholder="USERNAME" 
                                style={styles.input}
                                onChangeText={text => this.updateText(text,"login")}
                            />

                            <TextInput
                                autoCorrect={false}
                                value={this.state.password} 
                                secureTextEntry 
                                placeholder="PASSWORD" 
                                style={styles.input}
                                onChangeText={text => this.updateText(text,"password")}
                            />

                            <Button 
                                onPress={() =>this.gotoRegisterPage()} 
                                title="Register" 
                            />
                            
                            <Button 
                                onPress={() =>this.gotoForgetPassword()} 
                                title="Forgot Password" 
                            />

                            <Button 
                                onPress={() =>this.gotoHomePage()} 
                                title="Login" 
                             />

            </View>
        )
    }



}
const styles = StyleSheet.create({
    
    mainViewStyle: {
            width:100+'%',
            height:100+'%',
            justifyContent:'center',
            flex:1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor:"rgb(252,61,57)"
        },

    input: {
            width: 100 + '%',
            height: 50,
            paddingHorizontal: 50,
            backgroundColor: 'rgb(255,255,255)',
            marginBottom: 10,
     

    },
  
    

})
export default Login;