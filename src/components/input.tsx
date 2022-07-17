import React, { memo } from "react";
import styled from 'styled-components/native';
import { TextInput, View, TextInputProps } from 'react-native';

import Colors from '@enterprise/colors';

type InputProps = {

} & TextInputProps;

const { BACKGROUND } = Colors;

export const Input = memo(({ ...rest }: InputProps) => {

    return (
        <Container>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                allowFontScaling={false}
                placeholderTextColor="black"
                {...rest}
            />
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    background-color: ${BACKGROUND};
`;