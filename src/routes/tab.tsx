import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screens from '@pages/tabBarrel';

const Tab = createBottomTabNavigator();

export const TabNavigator = () =>
    <NavigationContainer independent >
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
    </NavigationContainer>