import React, { } from "react";
import { Image } from 'react-native';
import styled from 'styled-components/native';

import { Character } from '../types';
import { ImageValidate } from '@components/imageValidate';

type ItemListProps = {
    character: Character
}

export const ItemList = ({ character: { name, id, status, image, species } }: ItemListProps) => {

    return (
        <Container>
            <ImageValidate
                uri={image}
                style={{
                    width: 50,
                    height: 50,
                }}

            />

        </Container>
    )
}

const Container = styled.View`
    height: 70px;
    margin-top: 10px;
    flex-direction: row;
    background-color: white; 
    box-shadow: 0px 0px 3px rgba(0,0,0, .04);
`;