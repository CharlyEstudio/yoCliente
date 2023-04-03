import { View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Dispatchs
import { getCustomersApi } from '../reducers/customers';

// Components
import Map from '../components/Map';

const HomeScreen = ({ getCustomersApi }) => {
    useEffect(() => {
        SplashScreen.hide();
        getCustomersApi();
    }, []);
	// TODO

    return (
        <View>
            <Map />
        </View>
    )
};

// Data Redux
const mapDispatchToPros = dispatch => ({
    getCustomersApi: () => dispatch(getCustomersApi()),
});

export default connect(null, mapDispatchToPros)(HomeScreen);
