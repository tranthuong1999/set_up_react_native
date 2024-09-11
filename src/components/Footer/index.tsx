import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntd from 'react-native-vector-icons/AntDesign';


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
                <Text style={{ fontSize: 25, fontWeight: "700", color: "#000", marginBottom: 12 }}> Đăng kí tư vấn</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Họ và tên"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn_register}>
                    <Text style={styles.btn_text}>Đăng kí</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.copy_right}>
                <Text style={styles.text_copy_right}>Copyright © 2021. All rights reserved.</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 8 }}>
                <View style={[styles.block_2_child_1]}>
                    <IconAntd name="instagram" size={13} color="#fff" />
                </View>
                <View style={[styles.block_2_child_1]}>
                    <IconFont name="facebook" size={13} color="#fff" />
                </View>
                <View style={[styles.block_2_child_1]}>
                    <IconAntd name="twitter" size={13} color="#fff" />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    footer_screen: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#f0f8ff",
        marginBottom: 40
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
        paddingVertical: 10
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
    },
    input: {
        height: 40,
        borderWidth: 2,
        padding: 10,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        borderColor: "#41b294"
    },
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        paddingBottom: 20,
    },
    btn_register: {
        backgroundColor: '#f6ba35',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btn_text: {
        color: '#fff',
        fontSize: 16,
        textTransform: "uppercase"
    },
    copy_right: {
        borderTopColor: "#d0d0d0",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    text_copy_right: {
        fontSize: 12,
        color: "#252525",
        paddingTop: 8,
    }
})