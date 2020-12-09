import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import ModalFileAction from '../modal/ModalFileAction';
import { openModalFileAction } from '../../store/action/system'
import { useSelector, useDispatch } from "react-redux";


export default function FileHorizontal() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            type: 'image',
            source: 'https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            type: 'file'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            type: 'image',
            source: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            type: 'file'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            type: 'file'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            type: 'image',
            source: 'https://theinpaint.com/images/example-1-2.jpg'
        },
    ];
    const dispatch = useDispatch()
    return (
        <View>
            <FlatList
                data={DATA}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: '40%',
                            marginBottom: 16,
                            // backgroundColor: 'red',
                            // height: 100,
                            margin: '5%'
                        }}>
                            <ImageBackground style={{
                                borderRadius: 8,
                                overflow: "hidden",
                                flex: 1,
                                height: '70%',
                                flexDirection: 'row',
                                height: 100,
                                borderWidth: 1,
                                borderColor: "#fa9643",
                            }}
                                source={{ uri: item.type === 'image' ? item.source : '' }}
                            >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    // backgroundColor: 'rgba(0, 0, 0, 0.2)'
                                }}>
                                    <TouchableOpacity style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 8
                                    }}>
                                        <AntDesign name="clouduploado" color="#fa9643" size={25} />
                                    </TouchableOpacity>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <View style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            padding: 8,
                                            borderRadius: 10,
                                        }}>
                                            {
                                                item.type === 'image' ?
                                                    (<FontAwesome name="music" color="#000" size={18} />) :
                                                    (<Entypo name="text" color="#000" size={18} />)
                                            }

                                        </View>
                                    </View>
                                    <TouchableOpacity style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 8

                                    }}
                                        onPress={() => dispatch(openModalFileAction())}>
                                        <Fontisto name="more-v-a" color="#000" size={18} />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 8
                            }}>
                                <Text style={{
                                    fontSize: 16
                                }}>1 con vịt</Text>
                            </View>
                        </View >
                    )
                }
                }
                keyExtractor={item => item.id}
            />
            <ModalFileAction />
        </View>
    )
}
