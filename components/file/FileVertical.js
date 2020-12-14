import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FactoryService from '../../service/FactoryService'
import { useSelector, useDispatch } from "react-redux";
import { getListFolder, chooseParentFolder } from '../../store/action/folder'
import moment from 'moment';

export default function FileVertical({ navigation, file }) {
    const dispatch = useDispatch()
    const formatDate = (date) => {
        return moment(date).format("DD-MM-YYYY, h:mm")
    }

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => { }}
        >
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: "center",
                marginVertical: 15,
                borderRadius: 30,
                overflow: "hidden",
                padding: 8,
            }}>
                {
                    file.type === 'image' && file.attachFileIds.length ? (
                        <View style={[styles.folderIcon, { justifyContent: "center", alignItems: "center" }]}>
                            <ImageBackground
                                style={{ flex: 1, width: '100%', padding: 4, justifyContent: "center", alignItems: "center" }}
                                source={{
                                    uri: `http://192.168.1.11:3000/attach-file/${file.attachFileIds[0].id}`,
                                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiNWY4ODI1ZGNiYmY5MTEzZTA4MDU1Nzg3IiwiZGV2aWNlSWQiOiI5NjVhMDUzNy02MWQ4LTRiMzAtYTExYS0yOTlhMzJjMWFhNGMiLCJpYXQiOjE2MDc5MTkxODMsImV4cCI6MTYxMDUxMTE4M30.s_Z52kOCqNLIKhxQotZO74YaxuzFEUfc64FK16jJtM0" }
                                }}
                            >
                                {
                                    file.type === 'text' ? (<Entypo name="text" color="#ccc" size={50} />)
                                        : (<Entypo name="image" color="#ccc" size={50} />)
                                }
                            </ImageBackground>
                        </View>
                    ) : (
                            <View style={styles.folderIcon}>
                                {
                                    file.type === 'text' ? (<Entypo name="text" color="#ccc" size={50} />)
                                        : (<Entypo name="image" color="#ccc" size={50} />)
                                }
                            </View>
                        )
                }

                <View style={{
                    flex: 1,
                    height: '100%',
                    marginLeft: 8,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 12
                    }}>{file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}</Text>
                    <Text style={{
                        color: '#969490',
                        marginBottom: 4
                    }}>{file.description}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: "center"
                        }}>
                            <AntDesign name="calendar" color="#fa9643" size={15} />
                            <Text style={{
                                marginLeft: 8
                            }}>{formatDate(file.updatedAt)}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    width: '5%',
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: 4
                }}>
                    <Fontisto name="more-v-a" color="#000" size={20} />
                </TouchableOpacity>
            </View>
        </ TouchableHighlight >
    )
}

const styles = StyleSheet.create({
    folderIcon: {
        height: 80,
        width: '30%',
        padding: 0,
        margin: 0,
        justifyContent: "center",
        justifyContent: "center",
        alignItems: "center",

    }
})
