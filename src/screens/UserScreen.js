import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'white',
    },
    box: {
        padding: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    subtitle: {
        fontSize: 12,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: '900'
    }
});

const UserScreen = ({ route }) => {
    const user = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Name</Text>
                <Text style={styles.title}>{user.name}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Username</Text>
                <Text style={styles.title}>{user.username}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Email</Text>
                <Text style={styles.title}>{user.email}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Phone</Text>
                <Text style={styles.title}>{user.phone}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Ciudad</Text>
                <Text style={styles.title}>{user.address.city}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Website</Text>
                <Text style={styles.title}>{user.website}</Text>
            </View>
        </View>
    )
}

export default UserScreen;