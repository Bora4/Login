import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const SplashScreen = () => {
    return (
        <View>
            <Text style={styles.text}>
                Hello
                </Text>

            </View>
    )
}

const styles = StyleSheet.create (
    {
        text: {
            textAlign : 'center',
            justifyContent : 'center',
            fontSize : 50
        }
    }
)

export default SplashScreen
