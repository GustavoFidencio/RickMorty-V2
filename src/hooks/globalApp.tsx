import { Animated, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useRef, useState, useEffect, useReducer } from "react";

import Colors from '@enterprise/colors';
import { Animate } from '@services/animate';
import { UserReducer } from './reducers/user';
import { UserProps, UserDispatchProps } from './types';

const Context = createContext({} as UseGlobalProps);

type UseGlobalProps = {
    dark: boolean
    user: UserProps
    setDark(val: boolean): void
    color: Animated.AnimatedInterpolation
    dispatch(val: UserDispatchProps): void
    backgroundColor: Animated.AnimatedInterpolation
}

export const useGlobal = (): UseGlobalProps => {
    const Global = useContext(Context);
    return Global;
}

type ProviderProps = {
    children: React.ReactNode
}

const { Simple } = Animate();
const initialUser = { name: '', email: '' };
const { BACKGROUND_DARK, BACKGROUND_LIGHT } = Colors;

export const GlobalProvider = ({ children }: ProviderProps) => {

    const [dark, setDark] = useState(true);
    const [user, dispatch] = useReducer(UserReducer, initialUser);

    const animate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Simple({ val: dark ? 100 : 0, ref: animate, delay: 400 });
    }, [dark]);

    useEffect(() => {
        _init();
    }, []);

    const _init = async () => {
        let val = await _getTheme();
        setDark(val);
    }

    const _getTheme = async (): Promise<boolean> => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('@dark'))
            return Boolean(value);
        } catch (e) {
            console.log("Modal message error");
            return true;
        }
    }

    const color = animate.interpolate({
        inputRange: [0, 100],
        outputRange: ['black', '#fdfdfd'],
    });

    const backgroundColor = animate.interpolate({
        inputRange: [0, 100],
        outputRange: [BACKGROUND_LIGHT, BACKGROUND_DARK],
    });

    return (
        <Context.Provider
            value={{
                user,
                dispatch,

                dark,
                color,
                setDark,
                backgroundColor,
            }}
        >
            <StatusBar
                animated
                backgroundColor="black"
                barStyle={!dark ? 'dark-content' : 'light-content'}
            />
            {children}
        </Context.Provider>
    )
}