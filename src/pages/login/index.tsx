import { s, SafeArea, Flex } from './styles';

import React from "react";
import { StatusBar } from 'react-native';

import { Input } from '@components/input';
import { Button } from '@components/button';

export const Login = ({ }) =>
    <SafeArea>
        <StatusBar barStyle='light-content' backgroundColor="black" />
        <Flex>
            <Input place="Email" />
            <Input style={s.input} place="Senha" />
            <Button text='Entrar' />
        </Flex>
    </SafeArea>