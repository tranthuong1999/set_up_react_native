import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from "./data";
// @ts-ignore
import { CountUp } from 'use-count-up'
import AnimatedNumbers from 'react-native-animated-numbers';


const MemberScreen = () => {
    return (
        <SafeAreaView style={styles.member_screen}>
            {
                data.map((item, index) => {
                    return (
                        <View style={styles.item} key={index}>
                            <Image
                                style={styles.img_logo}
                                source={{
                                    uri: item.uri,
                                }}
                            />
                            <Text style={styles.count}>
                                {item.count}
                            </Text>
                            <Text style={[styles.member, index === 3 ? styles.bottom : styles.none]}>{item.title}</Text>
                        </View>
                    )
                })
            }
        </SafeAreaView>
    )
}

export default MemberScreen;

const styles = StyleSheet.create({
    member_screen: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        backgroundColor: "#f0f8ff"
    },
    img_logo: {
        width: 80,
        height: 80,
        marginTop: 40
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    count: {
        fontSize: 50,
        color: "#41b294",
        paddingTop: 10,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    member: {
        fontWeight: 'bold'
    },
    bottom: {
        paddingBottom: 80
    },
    none: {}
})