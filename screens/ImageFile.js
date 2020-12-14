import { Body, Button, Header, Input, Item, Label, Left, Right, Title } from 'native-base';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux"
import { handleCreateImageFile } from '../store/action/file'
// import * as ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
let options = {
    title: 'Select Image',
    customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default function ImageFile({ navigation }) {
    const [name, setName] = useState('Tên tệp tin')
    const [description, setDescription] = useState()
    const [images, setImages] = useState([])

    const [displayAsterisk, setDisplayAsterisk] = useState(false)
    const dispatch = useDispatch()

    const onHandleSaveFile = () => {
        if (!name) return
        dispatch(handleCreateImageFile(name, description, images))
    }

    const launchImageLibrary = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(imagesFromLocal => {
            console.log(imagesFromLocal, 'imagesFromLocal')
            try {
                setImages([...images, ...imagesFromLocal])
            } catch (error) {
                console.log(error)
            }
        });
    }
    return (
        <View style={{
            flex: 1
        }}>
            <Header style={{
                backgroundColor: '#fff',
            }}>
                <Left>
                    <TouchableOpacity transparent onPress={() => navigation.pop()}>
                        <Feather name="arrow-left" color="#000" size={25} />
                    </TouchableOpacity>
                </Left>
                <Body style={{
                    flex: 1,
                }}>
                    <TextInput
                        style={{
                            fontSize: 18
                        }}
                        placeholder="Nhập tên tệp tin"
                        onChangeText={(name) => setName(name)}
                        value={name}
                    >

                    </TextInput>
                </Body>

                <Right style={{
                }}>
                    <TouchableOpacity
                        transparent
                        onPress={onHandleSaveFile}>
                        <Entypo name="save" color="#f57811" size={25} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={{
                flex: 1,
                margin: 16,
                justifyContent: "flex-start",
            }}>
                <Label style={{
                    fontSize: 18
                }}>Mô tả</Label>
                <TextInput
                    style={{
                        fontSize: 18,
                        marginBottom: 12
                    }}
                    multiline
                    placeholder="Nhập thông tin mô tả"
                    onChangeText={(description) => setDescription(description)}
                >

                </TextInput>
                <Label style={{
                    fontSize: 18
                }}>Hình ảnh</Label>
                <TouchableOpacity style={{
                    backgroundColor: '#f57811',
                    width: 120,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: 20,
                    alignSelf: "center",
                    padding: 8
                }}
                    onPress={launchImageLibrary}
                >
                    <Entypo name="upload-to-cloud" color="#fff" size={25} />
                    <Text style={{
                        fontSize: 18,
                        color: '#fff'
                    }}>Tải Lên</Text>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    width: '100%',
                    marginTop: 10,
                    flexDirection: "row"
                }}>
                    <FlatList
                        data={images}
                        numColumns='2'
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{
                                width: '45%',
                                height: 180,
                                margin: '2.5%',
                                borderRadius: 5,
                                overflow: "hidden"
                            }}>
                                <ImageBackground source={{ uri: item.path }}
                                    style={{
                                        flex: 1
                                    }}>
                                </ImageBackground>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 0,
        fontSize: 16
    },
    buttonStyle: {
        alignSelf: "flex-end",
        margin: 4,
        padding: 8,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    textButton: {
        fontSize: 18,
        color: '#f57811'
    },

});