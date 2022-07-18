import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
    flex: 1;
`;

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
})