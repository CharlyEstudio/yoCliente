import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text: {
        fontSize: 18,
    },
});

export default function ListItem({ onPress, nav, customer }) {
    const handlerOnPress = () => {
        onPress(customer);
        nav.navigate('User', customer);
    };

    return (
        <TouchableOpacity
            onPress={handlerOnPress}
            style={styles.container}
        >
            <Text style={styles.text}>{customer.name}</Text>
        </TouchableOpacity>
    )
}