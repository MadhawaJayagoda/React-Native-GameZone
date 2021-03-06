import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: 'lobster-regular',
        fontSize: 30,
        color: '#333'
    },
    paragraphStyle: {
        marginVertical: 8,
        lineHeight: 20
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        marginVertical: 10
    },
    errorText: {
        color: 'crimson',
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 0
    }
});

export const ratings = {
    1: require('../assets/rating-1.png'),
    2: require('../assets/rating-2.png'),
    3: require('../assets/rating-3.png'),
    4: require('../assets/rating-4.png'),
    5: require('../assets/rating-5.png'),
}
