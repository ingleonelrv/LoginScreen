import React, { Component } from 'react'
import { TextInput,Text, View, StyleSheet,TouchableOpacity, StatusBar } from 'react-native'

class LoginForm extends Component {
  render() {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#2196F3' barStyle='light-content' />
            <TextInput
                placeholder='username or e-mail'
                returnKeyType='next' 
                onSubmitEditing={()=>this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} 
            />
            <TextInput
                placeholder='password'
                secureTextEntry
                returnKeyType='go'
                ref={(input)=>this.passwordInput=input}
                style={styles.input} 
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
       height:40,
       backgroundColor:'#BBDEFB',
       marginBottom:10,
       color:'#757575',
       paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#1976D2',
        paddingVertical:15
    },
    buttonText:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'700',
    }
})

export default LoginForm
