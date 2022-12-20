import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screens from '@pages/tabBarrel';

const Tab = createBottomTabNavigator();

export const TabNavigator = () =>
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
    >
        {
            Screens.map((configs, index) =>
                <Tab.Screen
                    {...configs}
                    key={index}
                />
            )
        }
    </Tab.Navigator>