import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '@enterprise/colors';
import { RootStackParamList } from './type';
import { Home, Menu } from '@pages/index';

const { BACKGROUND } = Colors;

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    return (
        <NavigationContainer independent >
            <Tab.Navigator
                initialRouteName="Menu"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}