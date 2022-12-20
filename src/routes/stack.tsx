import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabNavigator } from './tab';
import Pages from '@pages/stackBarrel';
import { GlobalProvider } from '@hooks/globalApp';
import { RootStackParamList, ScreensProp } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = [
    ...Pages,
    {
        name: "Tab",
        component: TabNavigator
    }
] as ScreensProp[];

export const StackNavigator = () =>
    <GlobalProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                {
                    Screens.map((configs, index) =>
                        <Stack.Screen
                            {...configs}
                            key={index}
                        />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    </GlobalProvider>