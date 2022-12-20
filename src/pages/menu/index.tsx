import { SafeArea } from './styles';

import React from "react";

import { useGlobal } from '@hooks/globalApp';
import { Header, Theme, Logout } from './commons';

export const Menu = () => {

    const { backgroundColor } = useGlobal();

    return (
        <SafeArea style={{ backgroundColor }}>
            <Header />
            <Theme />
            <Logout />
        </SafeArea>
    )
}