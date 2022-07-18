import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabNavigator } from './tab';
import { RootStackParamList } from './type';
import { Login, Splash } from '@pages/index';
import { GlobalProvider } from '@hooks/globalApp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {

    return (
        <GlobalProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Splash"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Tab"
                        component={TabNavigator}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                    />
                </Stack.Navigator>
            </NavigationContainer >
        </GlobalProvider>
    );
}