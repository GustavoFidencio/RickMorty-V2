import { Switch } from 'react-native';
import styled from 'styled-components/native';
import React, { useState, memo } from "react";

export const Theme = memo(() => {

    const [dark, setDark] = useState(false);

    const _toggle = (val: boolean) => {
        console.log(val);
        setDark(val);
    };

    return (
        <Container>
            <ContainerText>
                <TitleSetting>
                    Appearance Theme
                </TitleSetting>
                <TitleType>
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

const TitleSetting = styled.Text`
    font-size: 16px;
    font-weight: 300;
`;

const TitleType = styled.Text`
    opacity: .3;
    font-size: 16px;
    font-weight: 500;
`;