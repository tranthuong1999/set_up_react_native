import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function FooterScreen() {
    return (
        <View style={styles.footer_screen}>
            <View style={styles.footer_block_1}>
                <Text style={[styles.textE]}>V</Text>
                <Text style={[styles.textCommon, styles.text_learning]}>learning</Text>
                <View style={styles.icon_keyboard}>
                    <Icon
                        name="keyboard"
                        size={24}
                        color="#000"
                        style={[styles.textCommon]}
                    />
                </View>
            </View>
            <View style={styles.footer_block_2}>
                <View style={styles.block_2_child_1}>
                    <Icon name="phone" size={13} color="#fff" />
                </View>
                <Text style={styles.text_contact}>1800-123-456</Text>
            </View>
            <View style={styles.footer_block_2}>
                <View style={styles.block_2_child_1}>
                    <IconFont name="envelope-open-o" size={13} color="#fff" />
                </View>
                <Text style={styles.text_contact}>devit@gmail.com</Text>
            </View>

            <View style={styles.footer_block_2}>
                <View style={styles.block_2_child_1}>
                    <IconFont name="map-marker" size={13} color="#fff" />
                </View>
                <Text style={styles.text_contact}>Đà Nẵng</Text>
            </View>
            {/*  */}

            <View style={styles.footer_block_3}>
                <View style={styles.child_3}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: "#000", paddingBottom: 10 }}>Liên kết</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Trang chủ</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Dịch vụ</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Nhóm</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Blog</Text>
                    </View>
                </View>

                <View style={styles.child_3}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: "#000", paddingBottom: 10 }}>Khóa học</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Front End</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Back End</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Full stack</Text>
                    </View>
                    <View style={styles.view_check}>
                        <IconEntypo color="#000" name="chevron-small-right" size={16} />
                        <Text style={styles.text_footer}>Node Js</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 16 }}>
                <Text style={{ fontSize: 25, fontWeight: "700", color: "#000" }}> Đăng kí tư vấn</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer_screen: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 200,
        backgroundColor: "#f0f8ff"
    },
    footer_block_1: {
        flexDirection: "row",
        alignItems: 'flex-end',
        position: 'relative'
    },
    textCommon: {
        color: "#252525",
        fontSize: 20,
        textShadowColor: "#54d2c0",
        textShadowOffset: { width: 5, height: -2 },
        textShadowRadius: 3,
        fontFamily: "fontPoppin"
    },
    text_learning: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 24,
    },
    textE: {
        fontSize: 40,
        color: "#41b294",
        fontFamily: "fontPoppin"
    },
    icon_keyboard: {
        position: "absolute",
        bottom: 18,
        left: 50
    },
    footer_block_2: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: 10
    },
    block_2_child_1: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#41b294',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 10,
    },
    text_contact: {
        fontWeight: "600"
    },
    footer_block_3: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        paddingTop: 12
    },
    child_3: {},
    view_check: {
        flexDirection: "row",
    },
    text_footer: {
        fontWeight: 'bold',
        color: "#000",
        paddingBottom: 8
    }
})