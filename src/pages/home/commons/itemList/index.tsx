import { s, TextId, Container, TextName, SpecieName, ContainerText, ContainerStatus } from './styles';

import React, { memo } from "react";

import { Character } from '../../types';
import { useGlobal } from '@hooks/globalApp';
import { ImageValidate } from '@components/imageValidate';

type ItemListProps = {
    character: Character
};

const Item = ({ character: { name, id, status, image, species } }: ItemListProps) => {

    const { backgroundColor, color } = useGlobal();

    return (
        <Container style={{ backgroundColor }}>
            <ImageValidate
                uri={image}
                style={s.image}
            />
            <ContainerText>
                <TextName style={{ color }} numberOfLines={1}>
                    {name}
                </TextName>
                <SpecieName style={{ color }}>
                    {species}
                </SpecieName>
            </ContainerText>
            <ContainerStatus>
                <TextId style={{ color }}>
                    {id}
                </TextId>
                <SpecieName style={{ color }}>
                    {status}
                </SpecieName>
            </ContainerStatus>
        </Container>
    )
}

export const ItemList = memo(Item, (_old, _current) => true);