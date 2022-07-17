import React, { memo } from "react";
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

import Colors from '@enterprise/colors';

type InputProps = {
    text: string
} & TouchableOpacityProps;

const { PRIMARY } = Colors;

export const Button = memo(({ text, ...rest }: InputProps) =>
    <Container>
        <Touchable {...rest}>
            <Text>
                {text}
            </Text>
        </Touchable>
    </Container>
);

const Container = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
`;

const Touchable = styled.TouchableOpacity`
    align-items: center;
    padding: 10px 25px;
    border-radius: 20px;
    justify-content: center;
    background-color: ${PRIMARY};
`;

const Text = styled.Text`
    color: white;
    font-weight: 800;
`;