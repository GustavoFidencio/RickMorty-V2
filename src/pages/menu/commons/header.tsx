import React, { memo } from "react";
import styled from 'styled-components/native';

export const Header = memo(() =>
    <Container>
        <TitlePage>
            Menu
        </TitlePage>
    </Container>
);

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