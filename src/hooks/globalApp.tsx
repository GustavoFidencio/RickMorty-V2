import { Animated, StatusBar } from 'react-native';
import React, { createContext, useContext, useRef, useState, useEffect } from "react";

import Colors from '@enterprise/colors';
import { Animate } from '@services/animate';

const Context = createContext({} as UseGlobalProps);

type UseGlobalProps = {
    dark: boolean
    setDark(val: boolean): void
    color: Animated.AnimatedInterpolation
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
const { BACKGROUND_DARK, BACKGROUND_LIGHT } = Colors;

export const GlobalProvider = ({ children }: ProviderProps) => {

    const [dark, setDark] = useState(true);
    const animate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Simple({ val: dark ? 100 : 0, ref: animate, delay: 800 });
    }, [dark]);

    const color = animate.interpolate({
        inputRange: [0, 100],
        outputRange: ['black', '#fdfdfd'],
    });

    const backgroundColor = animate.interpolate({
        inputRange: [0, 100],
        outputRange: [BACKGROUND_LIGHT, BACKGROUND_DARK],
    });

    return (
        <Context.Provider value={{ dark, setDark, color, backgroundColor }}>
            <StatusBar
                animated
                backgroundColor="black"
                barStyle={!dark ? 'dark-content' : 'light-content'}
            />
            {children}
        </Context.Provider>
    )
}