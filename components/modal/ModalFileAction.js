import { Row } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { useSelector, useDispatch } from "react-redux";
import { closeModalFileAction } from '../../store/action/system'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


// const CreateNewDoc = (props) => {
//     return (
//         <View style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center"
//         }}>
//             <TouchableOpacity>
//                 <View style={{
//                     borderRadius: 30,
//                     borderWidth: 1,
//                     borderColor: '#c4c0b9',
//                     marginBottom: 8,
//                     width: 50,
//                     height: 50,
//                     justifyContent: "center",
//                     alignItems: "center"
//                 }}>
//                     {props.children}
//                 </View>
//                 <Text>{props.name}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

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

export default ModalFileAction = () => {
    const isOpenModalFileAction = useSelector(state => state.system.isOpenModalFileAction);
    const dispatch = useDispatch()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpenModalFileAction}
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
                <TouchableWithoutFeedback onPress={() => dispatch(closeModalFileAction())} >
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
