import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntructorScreen() {
    return (
        <View style={styles.intructor_screen}>
            <Text>IntructorScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    intructor_screen: {
        backgroundColor: 'red'
    }
})