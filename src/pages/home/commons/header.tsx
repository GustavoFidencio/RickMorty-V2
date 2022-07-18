import { } from 'react-native';
import React, { memo } from "react";
import styled from 'styled-components/native';

import { Icon } from '@components/icon';

export const Header = memo(({ }) => {

    return (
        <Container>
            <TitlePage>
                Characters
            </TitlePage>
            <Icon
                size={22}
                lib='entypo'
                name="dots-three-vertical"
            />
        </Container>
    )
});

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 5px 15px;
    justify-content: space-between;
`;

const TitlePage = styled.Text`
    font-size: 22px;
    font-weight: 600;
`;