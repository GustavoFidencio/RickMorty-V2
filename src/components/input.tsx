import React, { memo } from "react";
import styled from 'styled-components/native';
import { TextInputProps, StyleProp, ViewStyle, Animated } from 'react-native';

import { useGlobal } from "@hooks/globalApp";

type InputProps = {
    place: string
    style?: StyleProp<ViewStyle>
} & TextInputProps;

export const Input = memo(({ place, style, ...rest }: InputProps) => {

    const { color, dark } = useGlobal();

    return (
        <Container style={[style, { borderColor: color }]}>
            <Text style={{ color }}>
                {place}
            </Text>
            <InputText
                color={color}
                autoCorrect={false}
                autoCapitalize='none'
                allowFontScaling={false}
                placeholderTextColor={dark ? "white" : "black"}
                {...rest}
            />
        </Container >
    )
});

const Container = Animated.createAnimatedComponent(styled.View`
    width: 100%;
    height: 55px;
    padding: 0 10px;
    border-bottom-width: 1px;
`);

const Text = Animated.createAnimatedComponent(styled.Text`
    left: -5px;
    opacity: .8;
    font-weight: 600;
`);

const InputText = Animated.createAnimatedComponent(styled.TextInput`
    height: 35px;
    color: ${({ color }) => color};
`);