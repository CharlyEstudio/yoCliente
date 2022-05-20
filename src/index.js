import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

// Dispatchs
import { getCustomersApi } from './reducers/customers';

// Components

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = ({ getCustomersApi }) => {
    useEffect(() => {
        getCustomersApi();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hola Mundo</Text>
        </View>
    );
};

// Data Redux
const mapDispatchToPros = dispatch => ({
    getCustomersApi: () => dispatch(getCustomersApi()),
});

export default connect(null, mapDispatchToPros)(App);