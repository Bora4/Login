import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RegisterContainer from './RegisterContainer'

const Register = () => {

  return (
    <View style={styles.viewcontainer}>
        <View style={styles.emptyspace}>
          <Text style={styles.title}>
            Join Today
          </Text>
        </View>
        <View style={styles.registryform} >
          <RegisterContainer/>
        </View >
    </View>
  );
};

const styles = StyleSheet.create({
  viewcontainer: {
    backgroundColor: '#b8cdf2',
    flex: 1,
  },
  emptyspace: {
    backgroundColor: '#b8cdf2',
    flex: 1,
    justifyContent: 'center'
  },
  registryform: {
    flex: 3,
      padding: 20,
      paddingTop: 30,
      backgroundColor: '#fff',
      borderRadius: 50,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      justifyContent: 'flex-start'
  },
  title:{
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }
 
})


export default Register;