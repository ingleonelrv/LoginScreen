import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import LoginForm from './loginForm'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/Octocat.png')} 
            />
            <Text style={styles.title}>An app made for myApp using React Native</Text>
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#2196F3',

  },
  logoContainer:{
      flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:100,
    height:100
  },
  title:{
    color:'#FFFFFF',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:.9
  },
  formContainer:{

  }
})

export default Login
