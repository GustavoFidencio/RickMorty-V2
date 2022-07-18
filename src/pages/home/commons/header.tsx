import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { Icon } from '@components/icon';
import { useGlobal } from "@hooks/globalApp";

export const Header = memo(() => {

    const { dark, color } = useGlobal();

    return (
        <Container>
            <TitlePage style={{ color }} >
                Characters
            </TitlePage>
            <Icon
                size={22}
                lib='entypo'
                name="dots-three-vertical"
                color={dark ? 'white' : 'black'}
            />
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 5px 15px;
    justify-content: space-between;
`;

const TitlePage = Animated.createAnimatedComponent(styled.Text`
    font-size: 22px;
    font-weight: 600;
`);