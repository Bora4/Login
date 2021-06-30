import * as React from 'react';
import { useState } from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


const LoginContainer = () => {

  //Login infosunu cagiran fonksiyon
  _retrieveData = async () => {
    let username
    let password
    try {
      username = await AsyncStorage.getItem('username') //username adli 'key'in degerini 'username' degiskenine atiyor
      password = await AsyncStorage.getItem('password') //password adli 'key'in degerini 'password' degiskenine atiyor
      if(username===text1 && password===text2){ //eger altta girilen bilgi dogruysa
        navigation.navigate('SplashScreen')
      } else {
        Alert.alert(
          title = "Username/Password dont match."
        )
      }
    } catch(error){
      console.log('error')
    }

  };
  

  const navigation = useNavigation(); //navigasyonu kullanmak icin
  const [text1, setText1] = useState('');
  const onChangeName = (text1Value) => setText1(text1Value); //textfielddaki degiskenleri degistirmek icin
  const [text2, setText2] = useState('');
  const onChangePw = (text2Value) => setText2(text2Value);  //textfielddaki degiskenleri degistirmek icin

  return (
    <View>
        <Text style={styles.title}>
          Login
        </Text>
      <View style={styles.container}>
      <Text style={styles.text}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={text1}
        placeholder= "Username..."
      />
      </View>
      <View style={styles.container}>
      <Text style={styles.text}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePw}
        value={text2}
        placeholder= "Password..."
        secureTextEntry= {true} //parolayi gizlemek icin
      />
      </View>
      <View style={styles.containerbtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={_retrieveData}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.info}>
          Don't have an account?
        </Text>
      <View style={styles.containerbtn}>
        
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Register')} >
          <Text style={styles.btnText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#4e7a71',
    justifyContent: 'flex-start',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 40,
    borderBottomWidth: 1
  },
  input: {
    flex: 2,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
    paddingTop: 15,
    color: '#4e7a71'
  },
  containerbtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#fa7373',
    padding: 9,
    margin: 5,
    borderRadius: 15,
    width: '33%'
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10
  },
})


export default LoginContainer;
