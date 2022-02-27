import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home.js';
import ReviewDetails from '../screens/reviewDetails.js';
import Header from '../shared/header.js';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title='GameZone' />
        })
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 70 },
        headerTintColor: '#444'
    }
});

export default createAppContainer(HomeStack);
