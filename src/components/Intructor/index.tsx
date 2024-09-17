import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


export default function IntructorScreen() {
    return (
        <View style={styles.intructor_screen}>
            <Text style={styles.title}>Giảng viên hàng đầu</Text>
            <View style={styles.block_1}>
                <Image
                    style={styles.img_logo}
                    source={{
                        uri: 'https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg',
                    }}
                />
                <Text style={styles.name}>Big DadMoon</Text>
                <Text style={styles.expert}>Chuyên gia lĩnh vực lập trình</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Text style={{ color: "#f6ba35", marginLeft: 2 }}>4.9</Text>
                </View>
                <Text style={styles.review}>100 Đánh giá</Text>
            </View>
            {/* <View style={styles.block_1}>
                <Image
                    style={styles.img_logo}
                    source={{
                        uri: 'https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg',
                    }}
                />
                <Text style={styles.name}>IcarDi MenBor</Text>
                <Text style={styles.expert}>Chuyên gia ngôn ngữ Vue Js</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Icon name="star" size={13} color="#f6ba35" />
                    <Text style={{ color: "#f6ba35", marginLeft: 2 }}>4.9</Text>
                </View>
                <Text style={styles.review}>100 Đánh giá</Text>
            </View> */}
            <View style={styles.block_2}>
                <TouchableOpacity onPress={() => console.log('Dot Left clicked')}>
                    <View style={[styles.dot, styles.dot_left]}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Dot right clicked')}>
                    <View style={[styles.dot, styles.dot_right]}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    intructor_screen: {
        flex: 1
    },
    title: {
        paddingLeft: 20,
        paddingVertical: 20,
        color: "#000",
        fontSize: 13,
        fontWeight: "bold"
    },
    block_1: {
        justifyContent: "center",
        alignItems: "center"
    },
    img_logo: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    name: {
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    expert: {
        fontSize: 12,
        paddingVertical: 3
    },
    review: {
        fontSize: 13,
        color: "#8c8c8c"
    },
    block_2: {
        flexDirection: "row",
        justifyContent: 'center',
        paddingVertical: 40
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    dot_left: {
        backgroundColor: "#41b294",
        marginRight: 10
    },
    dot_right: {
        opacity: 0.25,
        backgroundColor: "#41b294"
    }
})