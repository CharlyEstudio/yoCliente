import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Drawer
const Drawer = createDrawerNavigator();

// Screens
import HomeScreen from '../screens/HomeScreen';
import StackNavigator from './StackNavigator';

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{headerTransparent: true, headerTitle: ''}} name='Home' component={HomeScreen} />
            <Drawer.Screen options={{headerTransparent: false, headerTitle: ''}} name='Users' component={StackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;