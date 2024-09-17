import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchListAllCategory, fetchListCategory } from '../../redux/slices/category.slice';
import { Img, Btn, BtnText, TextHeader } from './IntroStyle';
import { data } from './data';
import CoursesScreen from '../CoursesScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MemberScreen from '../Member';
import FooterScreen from '../Footer';
import IntructorScreen from '../Intructor';

const IntroScreen = () => {
    const { listAllCourse } = useAppSelector((state) => state.categoryReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchListAllCategory())
        dispatch(fetchListCategory())
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <Img
                source={{
                    uri: 'https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png',
                }}
            />
            <View style={styles.block_1}>
                <View >
                    <TextHeader>Chào mừng đến với môi trường</TextHeader>
                </View>
                <View style={styles.header}>
                    <Text style={styles.text}>V</Text>
                    <Text style={styles.text}>learning</Text>
                </View>
            </View>
            <Btn>
                <BtnText> Bắt đầu nào</BtnText>
            </Btn>
            {data.map((item, index) => (
                <View key={item.id} style={[styles.course, { backgroundColor: getCourseColor(index) }]}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item?.header && (
                        <Text style={styles.desc}>
                            <Text style={styles.real}>Học qua dự án thực tế,</Text>
                            <Text style={styles.fake}>{item?.header}</Text>
                        </Text>
                    )}
                    {item.items.map((subItem, subIndex) => (
                        <View style={styles.item} key={subIndex}>
                            <View>
                                <Icon
                                    name="check"
                                    size={13}
                                    color="#fff"
                                />
                            </View>
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: "#fff" }}>
                                    {subItem}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
            {/* course */}
            <View>
                <Text style={styles.title_course}> Khoá học phổ biến</Text>
            </View>
            <CoursesScreen data={listAllCourse.slice(0, 5)} isReference={true} />
            <View>
                <Text style={[styles.title_course, styles.title_reference]}>Khóa học tham khảo</Text>
            </View>
            <CoursesScreen data={listAllCourse.slice(6, 10)} isReference={false} />
            <MemberScreen />
            <IntructorScreen />
            <FooterScreen />
        </ScrollView>
    )
}
const getCourseColor = (index: number) => {
    const colors = ['#41b294', '#f6ba35', '#5c8295', '#f6ba35', '#63c0a8'];
    return colors[index];
};

const styles = StyleSheet.create({
    block_1: {
        maxWidth: 200,
        alignSelf: 'center',
        lineHeight: 2
    },
    header: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        fontSize: 50,
        color: "#41b294",
        fontWeight: "600",
        marginBottom: 15
    },
    block_3: {

    },
    course: {
        padding: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8
    },
    title: {
        fontSize: 28,
        color: "#fff",
        fontWeight: '500',
        textTransform: "uppercase",
        marginBottom: 8
    },
    desc: {
        marginBottom: 10,
        color: "#fff"
    },
    real: {
        fontWeight: "700"
    },
    fake: {
        fontWeight: "300"
    },
    item: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
        color: "#fff",
        fontSize: 12,
        fontWeight: '400',
    },
    block_4: {},
    title_course: {
        marginLeft: 20,
        fontWeight: "600",
        color: "#f6ba35",
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 18
    },
    title_reference: {
        color: "#000"
    }
})

export default IntroScreen;


