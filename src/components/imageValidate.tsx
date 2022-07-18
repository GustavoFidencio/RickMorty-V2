import styled from 'styled-components/native';
import React, { memo, useState } from "react";
import { StyleProp, ImageStyle } from 'react-native';

type ImageProps = {
    uri: string
    style?: StyleProp<ImageStyle>
};

export const ImageValidate = memo(({ uri, style }: ImageProps) => {

    const [isLoad, setLoad] = useState(true);

    return (
        <Container style={style}>
            {
                isLoad && <Load />
            }
            <Image
                style={style}
                source={{ uri }}
                resizeMode={'contain'}
                onLoadEnd={setLoad.bind(this, false)}
            />
        </Container>
    )
});

const Container = styled.View`
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .1);
    box-shadow: 0px 0px 2px rgba(0,0,0, .08);
`;

const Load = styled.ActivityIndicator`
    z-index: 2;
    width: 100%;
    height: 100%;
`;

const Image = styled.Image`
    position: absolute;
    border-radius: 7px;
`;