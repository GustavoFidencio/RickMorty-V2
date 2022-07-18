import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Menu } from '@pages/index';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    return (
        <NavigationContainer independent >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
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