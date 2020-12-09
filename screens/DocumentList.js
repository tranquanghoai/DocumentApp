import { Body, Button, Container, Header, Left, Right, Title } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector, useDispatch } from "react-redux"


import FolderVertical from '../components/folder/FolderVertical';
import FolderHorizontal from '../components/folder/FolderHorizontal';
import FileHorizontal from '../components/file/FileHorizontal';
import FileVertical from '../components/file/FileVertical';
import { getListFolder } from '../store/action/folder'

export default DocumentList = ({ navigation, route }) => {
    const [folderIsHorizontal, setFolderHorizontal] = useState(false)
    console.log(route, 'route')
    const dispatch = useDispatch()
    const folders = useSelector(state => state.folder.folders)
    const currentFolderId = useSelector(state => state.folder.currentFolderId)
    useEffect(() => {
        async function getFolderDetailById() {
            try {
                dispatch(getListFolder(filterFolder))
            } catch (error) {
                console.log(error, 'error')
            }
        }
        getFolderDetailById()
    }, [currentFolderId])
    useEffect(() => {
        async function fetchCurrentFolderId() {
            try {
                const filterFolder = {}
                dispatch(getListFolder(filterFolder))
            } catch (error) {
                console.log(error, 'error')
            }
        }
        fetchCurrentFolderId()
    }, [route])
    return (
        <View style={{
            flex: 1
        }}>
            <Container>
                <Header style={{
                    backgroundColor: '#fff',
                }}>
                    <Left>
                        <TouchableOpacity transparent onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" color="#000" size={25} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{
                        flex: 1
                    }}>
                        <Title style={{
                            color: '#000'
                        }}>Bóng đá xin chao viet nam</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Fontisto name="more-v-a" color="#000" size={20} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.scrollViewWrapper}>
                        <View style={styles.titleArea}>
                            <Text style={styles.titleText}>Thư Mục</Text>
                            <TouchableOpacity onPress={() => {
                                setFolderHorizontal(!folderIsHorizontal)
                            }}>
                                {
                                    folderIsHorizontal ? (<Entypo name="menu" color="#000" size={24} />)
                                        :
                                        (<AntDesign name="appstore-o" color="#000" size={24} />)
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            folderIsHorizontal ? (
                                <FolderHorizontal folders={folders} />
                            ) : (
                                    <React.Fragment>
                                        {
                                            folders.map(folder => (
                                                <FolderVertical navigation={navigation} key={folder.id} folder={folder} />
                                            ))
                                        }
                                    </React.Fragment>
                                )
                        }

                    </View>
                </ScrollView>
            </Container>
            {/* <Container style={{
                flex: 1
            }}>
                <Header style={{
                    backgroundColor: '#fff',
                }}>
                    <Left>
                        <TouchableOpacity transparent onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" color="#000" size={25} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{
                        flex: 1
                    }}>
                        <Title style={{
                            color: '#000'
                        }}>Bóng đá</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Fontisto name="more-v-a" color="#000" size={20} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.scrollViewWrapper}>
                        <View style={styles.titleArea}>
                            <Text style={styles.titleText}>Tệp tin</Text>
                            <TouchableOpacity onPress={() => {
                                setFolderHorizontal(!folderIsHorizontal)
                            }}>
                                {
                                    folderIsHorizontal ? (<Entypo name="menu" color="#000" size={24} />)
                                        :
                                        (<AntDesign name="appstore-o" color="#000" size={24} />)
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            folderIsHorizontal ? (
                                <FileHorizontal />
                            ) : (
                                    <React.Fragment>
                                        <FileVertical navigation={navigation} />
                                        <FileVertical navigation={navigation} />
                                        <FileVertical navigation={navigation} />
                                    </React.Fragment>
                                )
                        }

                    </View>
                </ScrollView>
            </Container> */}
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewWrapper: {
        flex: 1,
        margin: 20,
        padding: 4
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold"
    }
});