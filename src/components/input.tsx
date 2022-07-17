import React, { memo } from "react";
import styled from 'styled-components/native';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';

type InputProps = {
    place: string
    style?: StyleProp<ViewStyle>
} & TextInputProps;

export const Input = memo(({ place, style, ...rest }: InputProps) =>
    <Container style={style}>
        <Text>
            {place}
        </Text>
        <InputText
            autoCorrect={false}
            autoCapitalize='none'
            allowFontScaling={false}
            placeholderTextColor="white"
            {...rest}
        />
    </Container>
);

const Container = styled.View`
    width: 100%;
    height: 55px;
    padding: 0 10px;
    border-color: white;
    border-bottom-width: 1px;
`;

const Text = styled.Text`
    left: -5px;
    opacity: .8;
    color: white;
    font-weight: 600;
`;

const InputText = styled.TextInput`
    height: 35px;
    color: white;
`;