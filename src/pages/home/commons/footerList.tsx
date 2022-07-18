import React, { memo } from "react";
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { useGlobal } from "@hooks/globalApp";

type FooterListProps = {
    finish: boolean
};

export const FooterList = memo(({ finish }: FooterListProps) => {

    const { color } = useGlobal();

    return (
        <Container>
            {
                !finish ?
                    <Load size="small" />
                    :
                    <Text style={{ color }} >
                        End of characters...
                    </Text>
            }
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    padding: 10px 0;
    min-height: 10px;
`;

const Load = styled.ActivityIndicator`
`;

const Text = Animated.createAnimatedComponent(styled.Text`
    opacity: .6;
`);