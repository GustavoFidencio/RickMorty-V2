import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const TextId = styled.Text`
    opacity: .3;
    font-size: 20px;
    font-weight: 900;
`;

export const TextName = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

export const SpecieName = styled.Text`
    opacity: .8;
    font-size: 15px;
    font-weight: 300;
`;

export const ContainerStatus = styled.View`
    margin: 0 10px;
    align-items: flex-end;
`;

export const ContainerText = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const Container = styled.View`
    height: 70px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    background-color: white; 
    box-shadow: 0px 0px 3px rgba(0,0,0, .04);
`;

export const s = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});