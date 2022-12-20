import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useGlobal } from '@hooks/globalApp';
import { RootStackParamList } from '@routes/types';

export const Logout = memo(() => {

    const { color } = useGlobal();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const _logout = () => {
        navigation.replace('Login');
    }

    return (
        <TouchableContainer onPress={_logout.bind(this)}>
            <ContainerText>
                <TitleSetting style={{ color }}>
                    Exit
                </TitleSetting>
                <TitleType style={{ color }}>
                    disconnect your account
                </TitleType>
            </ContainerText>
            <TitleClose>
                X
            </TitleClose>
        </TouchableContainer>
    )
});

const TouchableContainer = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    padding: 5px 15px;
    align-items: center;
    border-bottom-width: .3px;
    justify-content: space-between;
    border-color: rgba(0, 0, 0, .5);
`;

const ContainerText = styled.View`
`;

const TitleClose = styled.Text`
    opacity: .8;
    right: 10px;;
    color: red;
    font-size: 20px;
    font-weight: 800;
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