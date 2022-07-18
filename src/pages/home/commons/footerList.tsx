import React, { memo } from "react";
import styled from 'styled-components/native';

type FooterListProps = {
    finish: boolean
};

export const FooterList = memo(({ finish }: FooterListProps) =>
    <Container>
        {
            !finish ?
                <Load size="small" />
                :
                <Text>
                    End of characters...
                </Text>
        }
    </Container>
);

const Container = styled.View`
    width: 100%;
    min-height: 10px;
    padding: 10px 0;
`;

const Text = styled.Text`
    opacity: .6;
`;

const Load = styled.ActivityIndicator`
`;