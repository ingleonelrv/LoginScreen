import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperTitle}>
            <Text style={styles.title}> miApp </Text>
        </View>
        <View style={styles.wrapperAuthor}>
            <Text style={styles.author}> Powered by Leonel Rodriguez </Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#2196F3',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        color: '#FFFFFF'
    },
    author:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'200'
    },
    wrapperTitle:{
        flex:1,
        justifyContent:'center'
    },
    wrapperAuthor:{
        marginBottom:10
    }
})

export default Splash
