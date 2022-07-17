import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '@enterprise/colors';
import { RootStackParamList } from './type';
import { Login, Home, Splash } from '@pages/index';

const { BACKGROUND } = Colors;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: BACKGROUND }
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}