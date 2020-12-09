import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function FolderHorizontal() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item, index }) => {
                return (
                    <View style={{
                        width: '50%',
                        flexDirection: "row",
                        marginBottom: 16
                    }}>
                        <View style={{
                            alignItems: "center",
                            width: '90%',
                        }}>
                            <FontAwesome name="folder" color="#ccc" size={100} style={{
                                marginVertical: -6,
                            }} />
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
                                }}>Thể Thao</Text>
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
