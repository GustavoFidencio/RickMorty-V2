import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const s = StyleSheet.create({
    input: {
        marginTop: 15,
    }
})

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    margin: 0 15px;
`;

export const Flex = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;