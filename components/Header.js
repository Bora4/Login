import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Header = () => {
    return (
        <View>
        <Text style={styles.title}>
            Welcome
        </Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    }
})

export default Header
