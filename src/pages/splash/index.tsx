import { Image, SafeArea } from './styles';

import React, { useEffect, useRef } from "react";
import { StatusBar, Animated } from 'react-native';
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'

import { Animate } from '@services/animate';
import Enterprise from '@enterprise/images';
import { RootStackParamList } from '@route/type';

type SplashProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>
};

const { logo } = Enterprise;
const { Simple } = Animate();

export const Splash = ({ navigation }: SplashProps) => {

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _initial();
    }, []);

    const nav = () =>
        navigation.replace("Tab");

    const _initial = () =>
        Simple({ val: 1, ref: opacity, delay: 1500, finish: nav.bind(this) });

    return (
        <SafeArea opacity={opacity}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="black"
            />
            <Image
                source={{ uri: logo }}
                resizeMode={'contain'}
            />
        </SafeArea>
    )
};