import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { useGlobal } from "@hooks/globalApp";

export const Header = memo(() => {

    const { color } = useGlobal();

    return (
        <Container>
            <TitlePage style={{ color }}>
                Menu
            </TitlePage>
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 5px 15px;
    margin-bottom: 10px;
    justify-content: space-between;
`;

const TitlePage = Animated.createAnimatedComponent(styled.Text`
    font-size: 22px;
    font-weight: 600;
`);