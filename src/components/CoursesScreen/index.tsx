
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { CardBody, CardBotom, CardDesc, Img, ItemCourse, ListCourse, TextDesc, TitleCourse } from './CourseStyle';
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
// @ts-ignore
import IconFont from "react-native-vector-icons/FontAwesome"

export default function CoursesScreen(props: { data: any[], isReference?: boolean }) {
    const { data, isReference } = props;
    return (
        <View style={styles.course_screen}>
            <ListCourse>
                {
                    data.map((item, index) => {
                        return (
                            <ItemCourse key={index}>
                                <View>
                                    <Img
                                        source={{
                                            uri: item.hinhAnh,
                                        }}
                                    />
                                </View>
                                <TitleCourse>
                                    <Text style={{ color: "#fff" }}>{item.tenKhoaHoc}</Text>
                                </TitleCourse>
                                <View style={{ margin: 20, marginTop: 35 }}>
                                    <TextDesc>Lập trình hiện tại đang là xu hướng trên toàn thế giới</TextDesc>
                                </View>
                                {/* bottom */}
                                {!isReference && <View style={styles.position_like}>
                                    <View style={styles.beforeElement} />
                                    <Text style={styles.title_like}> Yêu thích</Text>
                                    <View style={styles.afterElement} />
                                </View>
                                }
                                {isReference ?
                                    <View>
                                        <CardBody>
                                            <CardDesc>
                                                <View style={styles.img_logo}>
                                                    <Image
                                                        source={{
                                                            uri: "https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png",
                                                        }}
                                                        style={{ width: 50, height: 50 }}
                                                    />
                                                </View>
                                                <Text>Elon Musk</Text>
                                            </CardDesc>
                                        </CardBody>
                                        <CardBotom>
                                            <View>
                                                <Text style={styles.count_real}>
                                                    800.000
                                                    <Text style={styles.superscript}>đ</Text>
                                                </Text>
                                                <Text style={styles.count_fake}>
                                                    400.000
                                                    <Text style={styles.superscript}>đ</Text>
                                                </Text>
                                            </View>
                                            <View style={styles.block_2}>
                                                <Icon name="star" size={13} color="#f6ba35" />
                                                <Text style={styles.review}> 4.9</Text>
                                                <Text style={styles.count_use}> (7840)</Text>
                                            </View>
                                        </CardBotom>
                                    </View> :
                                    <View style={styles.footer}>
                                        <View style={styles.footer_block_1}>
                                            <View style={styles.child_1}>
                                                <Icon name="clockcircleo" size={13} color="#f6ba35" />
                                                <Text style={styles.left}> 8 giờ</Text>
                                            </View>
                                            <View style={styles.child_1}>
                                                <Icon name="calendar" size={13} color="#f06f68" />
                                                <Text style={styles.left}>4 tuần</Text>
                                            </View>
                                            <View style={styles.child_1}>
                                                <IconFont name="signal" size={13} color="#65c9ff" />
                                                <Text style={styles.left}> Tất cả</Text>
                                            </View>
                                        </View>

                                        <View style={styles.footer_block_2}>
                                            <View style={styles.common_row}>
                                                <View style={styles.img_logo}>
                                                    <Image
                                                        source={{
                                                            uri: "https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png",
                                                        }}
                                                        style={{ width: 50, height: 50 }}
                                                    />
                                                </View>
                                                <Text>Elon Musk</Text>
                                            </View>

                                            <View>
                                                <Text style={styles.price_real}> 800.000đ</Text>
                                                <View style={styles.common_row}>
                                                    <Text style={styles.fake_real}>400.000đ</Text>
                                                    <Icon style={styles.left} name="tag" size={18} color="red" />
                                                </View>
                                            </View>

                                        </View>
                                    </View>

                                }
                            </ItemCourse>
                        )
                    })
                }
            </ListCourse>
        </View>
    )
}

const styles = StyleSheet.create({
    common_row: {
        flexDirection: "row",
        alignItems: 'center'
    },
    course_screen: {
        marginLeft: 20,
        marginRight: 20
    },
    superscript: {
        fontSize: 12,
    },
    block_2: {
        flexDirection: "row",
        alignItems: 'center'
    },
    review: {
        color: "#f6ba35"
    },
    count_use: {
        color: "#8c8c8c",
        fontSize: 12
    },
    count_real: {
        fontSize: 12,
        color: "#8c8c8c",
        textDecorationLine: "line-through"
    },
    count_fake: {
        fontWeight: "500",
        color: "#41b294"
    },
    img_logo: {
        height: 60,
        width: 60,
        borderBottomColor: '#f6ba35',
        borderTopColor: '#f6ba35',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    position_like: {
        position: "absolute",
        backgroundColor: 'red',
    },
    title_like: {
        width: 85,
        height: 35,
        fontWeight: "600",
        color: '#fff',
        fontSize: 13,
        padding: 8,
        paddingTop: 5,
        paddingBottom: 4
    },
    beforeElement: {
        position: "absolute",
        borderRightWidth: 5,
        borderRightColor: "red",
        borderBottomWidth: 10,
        borderBottomColor: "transparent",
    },
    afterElement: {},
    footer: {},
    footer_block_1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 40,
        borderBottomWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: "rgba(0,0,0,0.125)"
    },
    child_1: {
        flexDirection: "row",
        alignItems: 'center'
    },
    left: {
        marginLeft: 4,
        fontWeight: "400"
    },
    footer_block_2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    price_real: {
        fontSize: 12,
        color: "#8c8c8c",
        marginBottom: 4
    },
    fake_real: {
        fontSize: 12,
        color: "#41b294",
        fontWeight: "500"
    },
    sup: {
        fontSize: 12,
        position: "relative",
        top: 100,
        width:40,
        height:40,
    }
})