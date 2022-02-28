import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPressHandler }) {
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#f01d71'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})