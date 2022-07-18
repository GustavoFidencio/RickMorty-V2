import React, { memo } from "react";
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Character } from '../types';
import { ImageValidate } from '@components/imageValidate';

type ItemListProps = {
    character: Character
};

const Item = ({ character: { name, id, status, image, species } }: ItemListProps) => {

    return (
        <Container>
            <ImageValidate
                uri={image}
                style={s.image}
            />
            <ContainerText>
                <TextName numberOfLines={1}>
                    {name}
                </TextName>
                <SpecieName>
                    {species}
                </SpecieName>
            </ContainerText>
            <ContainerStatus>
                <TextId>
                    {id}
                </TextId>
                <SpecieName>
                    {status}
                </SpecieName>
            </ContainerStatus>
        </Container>
    )
}

export const ItemList = memo(Item, (_old, _current) => false)

const TextId = styled.Text`
    opacity: .3;
    font-size: 20px;
    font-weight: 900;
`;

const TextName = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const SpecieName = styled.Text`
    opacity: .8;
    font-size: 15px;
    font-weight: 300;
`;

const ContainerStatus = styled.View`
   margin: 0 10px;
   align-items: flex-end;
`;

const ContainerText = styled.View`
    flex: 1;
    margin-left: 10px;
`;

const Container = styled.View`
    height: 70px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    background-color: white; 
    box-shadow: 0px 0px 3px rgba(0,0,0, .04);
`;

const s = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});