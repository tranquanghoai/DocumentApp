import { Row } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { useSelector, useDispatch } from "react-redux";
import { closeModalFolderAction } from '../../store/action/system'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export const FileAction = ({ iconName, text }) => {
    return (
        <View style={{
            marginVertical: 4,
            width: '100%',
            height: 30,
            flexDirection: "row",
            alignItems: "center"
        }}>
            <AntDesign name={iconName} color="#fa9643" size={22} />
            <Text style={{
                marginLeft: 22,
                fontSize: 16
            }}>{text}</Text>
        </View>
    )
}

export default ModalFolderAction = () => {
    const isOpenModalFolderAction = useSelector(state => state.system.isOpenModalFolderAction);
    const dispatch = useDispatch()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpenModalFolderAction}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >

            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}>
                <TouchableWithoutFeedback onPress={() => dispatch(closeModalFolderAction())} >
                    <View style={{
                        width: '100%',
                        height: '45%',
                    }}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{
                    width: '100%',
                    height: '55%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: '#fff',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 1,
                    paddingVertical: 5,
                    paddingHorizontal: 30,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 8,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        marginBottom: 16,
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: "space-around",
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: "bold"
                            }}>Bóng đá trong nước.mp3</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                    }}>
                        <FileAction iconName="sharealt" text="Chia sẽ" />
                        <FileAction iconName="upload" text="Nộp lên công ty" />
                        <FileAction iconName="swap" text="Chuyển thư mục" />
                        <FileAction iconName="edit" text="Chỉnh sửa" />
                        <FileAction iconName="like2" text="Thêm vào danh sách yêu thích" />
                        <FileAction iconName="download" text="Tải xuống" />
                        <FileAction iconName="delete" text="Xóa" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
