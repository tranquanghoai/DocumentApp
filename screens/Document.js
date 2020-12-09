import { Container } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import FolderHorizontal from '../components/folder/FolderHorizontal'
import FolderVertical from '../components/folder/FolderVertical'
import HomeHeader from '../components/header/HomeHeader'
import { getListFolder } from '../store/action/folder'

export default Document = ({ navigation }) => {
    const [folderIsHorizontal, setFolderHorizontal] = useState(false)
    const dispatch = useDispatch()
    const folders = useSelector(state => state.folder.folders)
    useEffect(() => {
        async function fetchData() {
            try {
                const filterFolder = {}
                dispatch(getListFolder(filterFolder))
            } catch (error) {
                console.log(error, 'error')
            }
        }
        fetchData()
    }, [navigation])
    return (
        <View style={{
            flex: 1
        }}>
            <Container>
                <HomeHeader navigation={navigation} />
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
})