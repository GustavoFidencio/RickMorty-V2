import { s, TextId, Container, TextName, SpecieName, ContainerText, ContainerStatus } from './styles';

import React, { memo } from "react";

import { Character } from '../../types';
import { ImageValidate } from '@components/imageValidate';

type ItemListProps = {
    character: Character
};

const Item = ({ character: { name, id, status, image, species } }: ItemListProps) =>
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

export const ItemList = memo(Item, (_old, _current) => false)
