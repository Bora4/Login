import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity, AsyncStorage} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

const RegisterContainer = () => {

  //username ve passwordu kaydeden fonksiyon
  _storeData = async () => {
    const firstPair = ['username', username]
    const secondPair = ['password', password]
    try {
      await AsyncStorage.multiSet(
        [firstPair, secondPair]
      )
      navigation.navigate('Login')
    } catch(error){
      console.log('error')
    }
  };

  const navigation = useNavigation(); 

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const onChangeName = (usernameValue) => setUsername(usernameValue);
  const onChangePw = (passwordValue) => setPassword(passwordValue);

    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.text}>Username</Text>
              <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={username}
             placeholder= "Username..."
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Password</Text>
              <TextInput
              style={styles.input}
              onChangeText={onChangePw}
              value={password}
              placeholder= "Password..."
              secureTextEntry= {true}
            />
          </View>
          <View style={styles.containerbtn}>        
            <TouchableOpacity style={styles.btn}
            onPress={_storeData}
            >
              <Text style={styles.btnText}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10,
    },
    input: {
      flex: 2,
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 15,
    },
  
    text: {
      fontSize: 20,
      flex: 1,
      paddingTop: 17,
      color: '#4e7a71',
      textAlign: 'center'
    },
    text2: {
      fontSize: 20,
      flex: 1,
      paddingTop: 10,
      color: '#4e7a71',
      textAlign: 'center'
    },
    containerbtn:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 40,
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
  })
  

export default RegisterContainer
