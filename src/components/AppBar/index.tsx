import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AppBar() {
    return (
        <View>
            <Text>Hello viet nam jj</Text>
            <Icon
                name="facebook"
                size={30}
            />
        </View>
    )
}

const styles = StyleSheet.create({})