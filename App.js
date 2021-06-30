import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './components/Login'
import Register from './components/Register'
import SplashScreen from './components/SplashScreen';


const Stack = createStackNavigator();

const App = () => {
  //Stack Navigator
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={
          {
            title: '',
            headerStyle: {
              backgroundColor: '#b8cdf2',
              height: 10
            },
            headerTitleStyle: {
              alignSelf: 'center',
              fontSize: 8
            },
            headerTintColor: '#fff'
          }
        } />
        <Stack.Screen name="Register" component={Register} options={
          {
            title: 'Create New Account',
            headerStyle: {
              backgroundColor: '#7cf564',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }
        } />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
