import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Card(props) {

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = {
    card: {
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff',
        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 4
    },
    cardContent: {
        marginHorizontal: 5,
        marginVertical: 5
    }
}
