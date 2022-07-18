import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const List = styled.FlatList`
    flex: 1;
    padding: 0 15px;
`;

export const Load = styled.ActivityIndicator`
    flex: 1;
`;

export const TextError = styled.Text`
    opacity: .7;
`;

export const s = StyleSheet.create({
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export const SafeArea = Animated.createAnimatedComponent(styled.SafeAreaView`
    flex: 1;
`);