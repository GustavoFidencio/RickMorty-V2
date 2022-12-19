import { s, SafeArea, Flex } from './styles';

import React from "react";
import { StatusBar } from 'react-native';
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'

import { Input } from '@components/input';
import { Button } from '@components/button';
import { RootStackParamList } from '@routes/types';
import { useGlobal } from '@hooks/globalApp';

type LoginProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

export const Login = ({ navigation }: LoginProps) => {

    const nav = () => {
        navigation.replace('Tab')
    }

    return (
        <SafeArea>
            <StatusBar barStyle='light-content' backgroundColor="black" />
            <Flex>
                <Input place="Email" />
                <Input style={s.input} place="Senha" />
                <Button text='Entrar' onPress={nav.bind(this)} />
            </Flex>
        </SafeArea>
    )
}