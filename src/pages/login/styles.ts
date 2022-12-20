import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const s = StyleSheet.create({
    input: {
        marginTop: 15,
    }
})

export const Flex = styled.View`
    flex: 1;
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SafeArea = Animated.createAnimatedComponent(styled.SafeAreaView`
    flex: 1;
    padding: 15px;
`);