import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const ContainerStatus = styled.View`
    margin: 0 10px;
    align-items: flex-end;
`;

export const ContainerText = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const s = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});

export const Container = Animated.createAnimatedComponent(styled.View`
    width: 100%;
    height: 70px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 3px rgba(0,0,0, .04);
`);

export const TextId = Animated.createAnimatedComponent(styled.Text`
    opacity: .3;
    font-size: 20px;
    font-weight: 900;
`);

export const TextName = Animated.createAnimatedComponent(styled.Text`
    font-size: 16px;
    font-weight: 600;
`);

export const SpecieName = Animated.createAnimatedComponent(styled.Text`
    opacity: .8;
    font-size: 15px;
    font-weight: 300;
`);