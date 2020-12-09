import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Input } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
export default function Login() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#faf5f5'
        }}>

            <View style={{
                flex: 1,
                margin: 30,
                justifyContent: "center",
                alignItems: "center",
            }}>

                <Image
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={{
                        uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/document-app-icon-or-logo-icon-design-template-7b6cac8de4b9abdd949f7643fe00924e_screen.jpg?ts=1576967977',
                    }}
                />
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: '#f57811',
                        marginBottom: 20
                    }}>Document System</Text>
                </View>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: '100%',
                    height: 60
                }}>
                    <View style={{
                        height: '100%',
                        width: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <Feather name="phone" color="#a19595" size={25} />
                    </View>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 60,
                            width: '100%',
                            borderBottomColor: '#fff',
                            borderBottomWidth: 1,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginLeft: 3,
                            paddingLeft: 20,
                        }}
                        placeholderTextColor='#a19595'
                        placeholder='Số điện thoại'
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: '100%',
                    height: 60,
                    marginTop: 4
                }}>
                    <View style={{
                        height: '100%',
                        width: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <Feather name="key" color="#a19595" size={25} />
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginLeft: 3,
                    }}>
                        <TextInput
                            style={{
                                flex: 1,
                                height: 60,
                                width: '100%',
                                paddingLeft: 20,
                            }}
                            placeholderTextColor='#a19595'
                            placeholder='Mật khẩu'
                        />
                        <View style={{
                            // backgroundColor: 'red',
                            justifyContent: "center",
                            alignItems: "center",
                            // paddingLeft: 15,
                            margin: 20
                        }}>
                            <Feather name="eye" color="#a19595" size={25} />
                        </View>
                    </View>

                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    marginVertical: 20
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#f57811'
                        }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '50%',
                        marginVertical: 20
                    }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#fa9643', '#f57811']}
                            colors={['#fa9643', '#f57811']}
                            style={{
                                height: 60,
                                borderRadius: 30,
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: "row"
                            }}>
                            <View>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>Đăng Nhập</Text>
                            </View>
                            <View>
                                <AntDesign name="arrowright" color="#fff" size={25} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>

        </View >
    )
}

const styles = StyleSheet.create({

})