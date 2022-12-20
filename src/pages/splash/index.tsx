import { Image, SafeArea } from './styles';

import { Animated } from 'react-native';
import React, { useEffect, useRef, useState } from "react";
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'

import { Animate } from '@services/animate';
import Enterprise from '@enterprise/images';
import { useGlobal } from '@hooks/globalApp';
import { StorageService } from '@services/storage';
import { RootStackParamList } from '@routes/types';

type SplashProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>
};

const { logo } = Enterprise;
const { Simple } = Animate();

export const Splash = ({ navigation }: SplashProps) => {

    const [end, setEnd] = useState(false);
    const [load, setLoad] = useState(true);
    const { backgroundColor, dispatch, user: { email } } = useGlobal();

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _initial();
    }, []);

    useEffect(() => {
        if (end && !load) navigation.navigate(email ? "Tab" : "Login");
    }, [end, load])

    const _initial = async () => {
        Simple({ val: 1, ref: opacity, delay: 1500, finish: setEnd.bind(this, true) });
        let email = await StorageService.getItem('@email');
        dispatch({ type: 'setEmail', email });
        setLoad(false);
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