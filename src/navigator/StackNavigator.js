import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import UsersScreen from '../screens/UsersScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='UsersList' options={{headerShown: false}} component={UsersScreen} />
            <Stack.Screen name='User' component={UserScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;