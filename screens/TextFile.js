import { Body, Button, Header, Left, Right, Title } from 'native-base';
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

    const [nameInModal, setNameInModal] = useState()
    const [descriptionInModal, setDescriptionInModal] = useState()
    const [isOpenModalAddFileInfo, setIsOpenModalAddFileInfo] = useState(false)
    const [displayAsterisk, setDisplayAsterisk] = useState(false)
    const dispatch = useDispatch()

    const resetText = () => {
        setNameInModal('')
        setDescriptionInModal('')
    }
    const onHandleAgreeModal = () => {
        setName(nameInModal)
        setDescription(descriptionInModal)
        setIsOpenModalAddFileInfo(false)
    }
    const onHandleOpenAddInfo = () => {
        setNameInModal(name)
        setDescriptionInModal(description)
        setIsOpenModalAddFileInfo(true)
    }
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
                    // backgroundColor: 'red'
                }}>
                    <Title style={{
                        color: '#000',

                    }}>{name}</Title>
                </Body>

                <Right style={{
                    // backgroundColor: 'red'
                }}>
                    <TouchableOpacity
                        style={{
                            marginRight: 24
                        }}
                        transparent
                        onPress={onHandleOpenAddInfo}>
                        <AntDesign name="edit" color="#f57811" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        transparent
                        onPress={onHandleSaveFile}>
                        <Entypo name="save" color="#f57811" size={25} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={{
                flex: 1,
                // padding: 8,
                margin: 8,
                justifyContent: "flex-start",
                // backgroundColor: 'green'
            }}>
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
                {/* <TouchableOpacity style={{
                    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    position: 'absolute',
                    right: 8,
                    bottom: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 5
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#f57811'
                    }}>Lưu</Text>
                </TouchableOpacity> */}
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={isOpenModalAddFileInfo}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}>
                    <TouchableWithoutFeedback onPress={() => setIsOpenModalAddFileInfo(false)} >
                        <View style={{
                            width: '100%',
                            height: '35%',
                        }}>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{
                        width: '90%',
                        height: '30%',
                        minHeight: 200,
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 1,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            paddingVertical: 8,
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: '#f57811'
                                }}>Thông Tin Tệp Tin</Text>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            paddingHorizontal: 20
                        }}>
                            <View style={{
                                flexDirection: "row",
                                // justifyContent: "center"
                                alignItems: "center"
                            }}>
                                <TextInput
                                    style={[styles.textInput, { flex: 1 }]}
                                    onChangeText={(name) => setNameInModal(name)}
                                    placeholder="Tên tệp tin"
                                    autoFocus={true}
                                    value={nameInModal}
                                />
                                {
                                    displayAsterisk && (
                                        <FontAwesome name="asterisk" color="red" size={12} />
                                    )
                                }
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={text => setDescriptionInModal(text)}
                                placeholder="Mô tả"
                                value={descriptionInModal}
                            />
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: "flex-end"
                            }}>
                                <TouchableOpacity
                                    onPress={resetText}
                                    style={styles.buttonStyle}
                                >
                                    <Text style={styles.textButton}>Hủy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onHandleAgreeModal}
                                    style={styles.buttonStyle}
                                >
                                    <Text style={styles.textButton}>Đồng ý</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => setIsOpenModalAddFileInfo(false)} >
                        <View style={{
                            width: '100%',
                            height: '35%',
                        }}>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
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