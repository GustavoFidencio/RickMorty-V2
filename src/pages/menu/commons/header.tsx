import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { useGlobal } from "@hooks/globalApp";

export const Header = memo(() => {

    const { color, user: { email } } = useGlobal();

    return (
        <Container>
            <TitlePage style={{ color }}>
                Menu
            </TitlePage>
            <TextEmail style={{ color }}>
                {email}
            </TextEmail>
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    padding: 5px 15px;
    justify-content: center;
    margin-bottom: 10px;
`;

const TitlePage = Animated.createAnimatedComponent(styled.Text`
    font-size: 22px;
    font-weight: 600;
`);

const TextEmail = Animated.createAnimatedComponent(styled.Text`
    opacity: .3;
    font-size: 18px;
    font-weight: 600;
`);