
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { CardBody, CardBotom, CardDesc, Img, ItemCourse, ListCourse, TextDesc, TitleCourse } from './CourseStyle';
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';


export default function CoursesScreen(props: { data: any[] }) {
    const { data } = props;
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

                                <CardBody>
                                    <TextDesc>Lập trình hiện tại đang là xu hướng trên toàn thế giới</TextDesc>
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
                            </ItemCourse>
                        )
                    })
                }
            </ListCourse>
        </View>
    )
}

const styles = StyleSheet.create({
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
})