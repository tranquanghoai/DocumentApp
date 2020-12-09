import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function FileVertical({ navigation, item }) {
    return (
        // <TouchableHighlight
        //     activeOpacity={0.6}
        //     underlayColor="#DDDDDD"
        //     onPress={() => navigation.navigate('FileList')}
        // >
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: "center",
            marginVertical: 15,
            overflow: "hidden",
            padding: 8,
            // width: 80,
            height: 80,
        }}>
            <View style={{
                width: 80,
                // height: 80,
                borderRadius: 8,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#fa9643",
                marginRight: 8,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ImageBackground style={{
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    source={{ uri: Math.round(Math.random()) === 0 ? 'https://theinpaint.com/images/example-1-2.jpg' : '' }}>
                    <TouchableOpacity style={{
                        width: 30,
                        height: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 8
                    }}>
                        {
                            Math.round(Math.random()) === 0 ?
                                (<FontAwesome name="music" color="#000" size={18} />) :
                                (<Entypo name="text" color="#000" size={18} />)
                        }
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={{
                flex: 1,
                marginLeft: 8,
                justifyContent: "center",
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginBottom: 12,
                        }}>
                            Bóng đá
                            
                        </Text>
                    <TouchableOpacity style={{
                        // backgroundColor: 'red',
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 15,
                        marginLeft: 12,
                    }}>
                        <AntDesign name="clouduploado" color="#fa9643" size={25} style={{padding: 4, height: 30}}/>
                    </TouchableOpacity>
                </View>
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
                        <AntDesign name="calendar" color="#fa9643" size={15} />
                        <Text style={{
                            marginLeft: 8
                        }}> 22-12-1997</Text>
                    </View>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'red',
                width: '10%',
                height: '100%',
                // justifyContent: "center",
                justifyContent: "space-between",
                alignItems: "center",
                // flexDirection: 'row'
            }}>
                {/* <TouchableOpacity style={{
                    padding: 4,
                    width: 30,
                    height: 30,
                    // backgroundColor: 'red',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <AntDesign name="upload" color="#000" size={18} />
                </TouchableOpacity> */}
                <TouchableOpacity style={{
                    padding: 4,
                    width: 30,
                    height: 30,
                    // backgroundColor: 'red',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Fontisto name="more-v-a" color="#000" size={20} />
                </TouchableOpacity>
                {/* <TouchableOpacity style={{
                        width: '5%',
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: 4
                    }}>
                    </TouchableOpacity> */}
            </View>
            {/* <TouchableOpacity style={{
                    width: '5%',
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: 4
                }}>
                    <Fontisto name="more-v-a" color="#000" size={20} />
                </TouchableOpacity> */}
        </View>
        // </ TouchableHighlight >
    )
}
