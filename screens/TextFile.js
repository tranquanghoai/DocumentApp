import { Body, Button, Header, Input, Item, Label, Left, Right, Title } from 'native-base';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';
import ModalAddFileInfo from '../components/modal/ModalAddFileInfo'
import { useSelector, useDispatch } from "react-redux"
import { openModalAddFileInfo } from '../store/action/system'
import { handleCreateTextFile } from '../store/action/file'

export default function TextFile({ navigation }) {
    const [name, setName] = useState('Tên tệp tin')
    const [description, setDescription] = useState()
    const [content, setContent] = useState()

    const [displayAsterisk, setDisplayAsterisk] = useState(false)
    const dispatch = useDispatch()

    const onHandleSaveFile = () => {
        if (!name) return
        dispatch(handleCreateTextFile(name, description, content))
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
                        multiline
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
                        fontSize: 18
                    }}
                    multiline
                    placeholder="Nhập thông tin mô tả"
                    onChangeText={(description) => setDescription(description)}
                >

                </TextInput>
                <Label style={{
                    fontSize: 18
                }}>Nội dung</Label>
                <TextInput
                    style={{
                        fontSize: 18
                    }}
                    multiline
                    placeholder="Nhập nội dung"
                    autoFocus={true}
                    onChangeText={(content) => setContent(content)}
                    returnKeyType={"search"}
                    returnKeyLabel="hoai">

                </TextInput>
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
    }
});