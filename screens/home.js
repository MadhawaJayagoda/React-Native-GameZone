import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Not so Final Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
    ]);

    return (
        <View style={globalStyles.container}>
            <View style={styles.modalToggleHolder}>
                <TouchableOpacity onPressIn={() => setModalOpen(true)}>
                    <MaterialIcons
                        name='add'
                        size={24}
                        style={styles.modalToggle}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <View>
                            <Text> {item.title} </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggleHolder: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        zIndex: 1,
    },
    modalToggle: {
        backgroundColor: '#FF1493',
        borderRadius: 50,
        color: '#fff',
        padding: 10,
    }
})
