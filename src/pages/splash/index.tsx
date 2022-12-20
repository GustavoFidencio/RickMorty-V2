import { Image, SafeArea } from './styles';

import { Animated } from 'react-native';
import React, { useEffect, useRef } from "react";
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'

import { Animate } from '@services/animate';
import Enterprise from '@enterprise/images';
import { useGlobal } from '@hooks/globalApp';
import { RootStackParamList } from '@routes/types';

type SplashProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>
};

const { logo } = Enterprise;
const { Simple } = Animate();

export const Splash = ({ navigation }: SplashProps) => {

    const { backgroundColor, } = useGlobal();
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _initial();
    }, []);

    const nav = () => {
        navigation.navigate("Tab");
    }

    const _initial = async () => {
        Simple({ val: 1, ref: opacity, delay: 1500, finish: nav.bind(this) });
    }

    return (
        <SafeArea style={{ opacity, backgroundColor }}>
            <Image
                source={{ uri: logo }}
                resizeMode={'contain'}
            />
        </SafeArea>
    )
};