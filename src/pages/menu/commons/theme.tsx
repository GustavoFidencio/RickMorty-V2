import { Switch } from 'react-native';
import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { useGlobal } from '@hooks/globalApp';

export const Theme = memo(() => {

    const { dark, setDark, color } = useGlobal();

    const _toggle = (val: boolean) => {
        setDark(val);
    };

    return (
        <Container>
            <ContainerText>
                <TitleSetting style={{ color }}>
                    Appearance Theme
                </TitleSetting>
                <TitleType style={{ color }}>
                    {dark ? 'Dark' : 'Light'}
                </TitleType>
            </ContainerText>
            <Switch
                value={dark}
                thumbColor={'white'}
                onValueChange={_toggle}
                ios_backgroundColor={"#3e3e3e"}
                trackColor={{ false: "#767577", true: "#017AFE" }}
            />
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    padding: 5px 15px;
    align-items: center;
    border-top-width: .3px;
    border-bottom-width: .3px;
    justify-content: space-between;
    border-color: rgba(0, 0, 0, .5);
`;

const ContainerText = styled.View`
`;

const TitleSetting = Animated.createAnimatedComponent(styled.Text`
    font-size: 16px;
    font-weight: 300;
`);

const TitleType = Animated.createAnimatedComponent(styled.Text`
    opacity: .3;
    font-size: 16px;
    font-weight: 500;
`);