import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about.js';
import Header from '../shared/header.js';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title='About GameZone' />
        })
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 70 },
        headerTintColor: '#444'
    }
});

export default createAppContainer(AboutStack);
