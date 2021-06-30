import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginContainer from './LoginContainer';
import Header from './Header';


const Login = () => {
    return (
      <View style={styles.viewcontainer}>
        <View style={styles.header} >
          <Header/>
        </View>
        <View style={styles.container} >
          <LoginContainer/>
        </View >
    </View>
        
    )
}

//Styles
const styles = StyleSheet.create ({
    viewcontainer: {
      backgroundColor: '#b8cdf2',
      flex: 1,
    },
    header: {
      flex: 1,
      justifyContent: 'center'
    },
    container: {
      flex: 3,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 50,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      justifyContent: 'flex-start'
    }
  })  

export default Login
