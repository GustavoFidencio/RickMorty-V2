import { s, SafeArea, Flex } from './styles';

import React from "react";
import { StatusBar } from 'react-native';
import { NativeStackNavigationProp, } from '@react-navigation/native-stack';

import { Input } from '@components/input';
import { Button } from '@components/button';
import { useGlobal } from '@hooks/globalApp';
import { StorageService } from '@services/storage';
import { RootStackParamList } from '@routes/types';

type LoginProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

export const Login = ({ navigation }: LoginProps) => {

    const { backgroundColor, dispatch, user: { email } } = useGlobal();

    const nav = async () => {
        await StorageService.setItem('@email', email);
        navigation.replace('Tab');
    }

    return (
        <SafeArea style={{ backgroundColor }}>
            <StatusBar barStyle='light-content' backgroundColor="black" />
            <Flex>
                <Input
                    place="Email"
                    value={email}
                    onChangeText={(email) => {
                        dispatch({ type: 'setEmail', email })
                    }}
                />
                <Input style={s.input} place="Senha" />
                <Button text='Entrar' onPress={nav.bind(this)} />
            </Flex>
        </SafeArea>
    )
}