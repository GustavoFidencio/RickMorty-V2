import { SafeArea } from './styles';

import React from "react";
import { View } from 'react-native';

import { Header, Theme } from './commons';

export const Menu = () =>
    <SafeArea>
        <View>
            <Header />
            <Theme />
        </View>
    </SafeArea>