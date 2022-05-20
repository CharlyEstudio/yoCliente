import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';

// Store
import store from './src/store';

// Navigator
import DrawerNavigator from './src/navigator/DrawerNavigator';

export default function() {
    return (
        <Provider
            store={store}
        >
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </Provider>
    );
};
