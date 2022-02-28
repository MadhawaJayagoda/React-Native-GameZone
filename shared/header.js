import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const onPressMenuHandler = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header} >
            {/* Icon for the menu */}
            <MaterialIcons name='menu' size={28} onPress={onPressMenuHandler} style={styles.icon} />
            <View style={styles.topBar}>
                <Image style={styles.logo} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText} > { title } </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 5
    },
    logo: {
        height: 25,
        width: 28,
        margin: 10
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});