import { SafeArea } from './styles';

import React from "react";
import { View } from 'react-native';

import { Header, Theme } from './commons';
import { useGlobal } from '@hooks/globalApp';

export const Menu = () => {

    const { backgroundColor } = useGlobal();

    return (
        <SafeArea style={{ backgroundColor }}>
            <View>
                <Header />
                <Theme />
            </View>
        </SafeArea>
    )
}