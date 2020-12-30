import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux'
export default function fileHorizontal({ files }) {
    const accessToken = useSelector(state => state.auth.accessToken)
    return (
        <FlatList
            data={files}
            numColumns={2}
            renderItem={({ item, index }) => {
                return (
                    <View style={{
                        width: '40%',
                        flexDirection: "row",
                        marginBottom: 16,
                        marginHorizontal: '5%',
                    }}>
                        <View style={{
                            alignItems: "center",
                            width: '90%',
                            height: 140
                        }}>
                            <View style={{
                                width: '100%',
                                height: '70%',
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                {
                                    item.type === 'image' && item.attachFileIds.length && (
                                        <ImageBackground
                                            style={{
                                                flex: 1,
                                                width: '100%',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: 5,
                                                overflow: "hidden"
                                            }}
                                            source={{
                                                uri: `http://192.168.1.11:3000/attach-file/${item.attachFileIds[0].id}`,
                                                headers: { Authorization: `Bearer ${accessToken}` }
                                            }}>
                                            {/* <Entypo name="image" color="#ccc" size={50} /> */}
                                        </ImageBackground>
                                    )
                                }
                                {item.type === 'image' && !item.attachFileIds.length && (
                                    <View style={{
                                        padding: 8,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 5
                                    }}>
                                        <Entypo name="text" color="#ccc" size={50} />
                                    </View>

                                )}
                                {item.type === 'text' && (
                                    <View style={{
                                        padding: 8,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 5
                                    }}>
                                        <Entypo name="text" color="#ccc" size={50} />
                                    </View>

                                )}

                            </View>
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: 'center',
                                height: 40
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    textAlign: "center",
                                    lineHeight: 20,
                                }}>{item.name}</Text>
                            </View>

                        </View>
                        <View style={{
                            width: '10%',
                            justifyContent: "flex-end"
                        }}>
                            <TouchableOpacity style={{
                                width: '100%',
                                height: 40,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                <Fontisto name="more-v-a" color="#000" size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            }
            keyExtractor={item => item.id}
        />
    )
}
