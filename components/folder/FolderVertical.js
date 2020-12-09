import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import api from '../../service'

export default function FolderVertical({ navigation }) {
    useEffect(() => {
        async function fetchData() {
            console.log('Run here')
            console.log(api.FOLDER, 'folder')
            // await api.FOLDER.getList()
        }
        fetchData();

    }, [])
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('FileList')}
        >
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: "center",
                // borderBottomColor: '#e2e0db',
                // borderBottomWidth: 1,
                // backgroundColor: 'red',
                marginVertical: 15,
                borderRadius: 30,
                overflow: "hidden",
                padding: 8,
                // paddingBottom: 14
            }}>
                <View style={{
                    height: '100%',
                    width: '30%',
                    padding: 0,
                    margin: 0
                }}>
                    <FontAwesome name="folder" color="#ccc" size={100} style={{
                        marginVertical: -6,
                    }} />
                </View>
                <View style={{
                    flex: 1,
                    height: '100%',
                    marginLeft: 8
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 12
                    }}>Bóng đá</Text>
                    <Text style={{
                        color: '#969490',
                        marginBottom: 4
                    }}>Thư mục về bóng đá trong nước</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: "center"
                        }}>
                            <FontAwesome name="folder-open-o" color="#fa9643" size={15} />
                            <Text style={{
                                marginLeft: 8
                            }}>1</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 16,
                            alignItems: "center"
                        }}>
                            <AntDesign name="menu-fold" color="#fa9643" size={15} />
                            <Text style={{
                                marginLeft: 8
                            }}>Thể thao</Text>
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
