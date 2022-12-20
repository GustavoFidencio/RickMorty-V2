import { Switch } from 'react-native';
import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useGlobal } from '@hooks/globalApp';

export const Theme = memo(() => {

    const { setDark, color, dark } = useGlobal();

    const _setStorage = async (val: boolean) => {
        try {
            const jsonValue = JSON.stringify(val)
            await AsyncStorage.setItem('@dark', jsonValue)
        } catch (e) {
            return console.log("modal Error")
        }
    }

    const _toggle = (val: boolean) => {
        setDark(val);
        _setStorage(val)
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