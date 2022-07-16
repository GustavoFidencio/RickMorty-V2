import React from "react";
import styled from 'styled-components/native';
import { View, Text, SafeAreaView } from 'react-native';

export const Menu = ({ }) => {

    return (
        <SafeArea>
            <View>
                <Text style={{ backgroundColor: 'red' }}>
                    Menu
                </Text>
            </View>
        </SafeArea>
    )
}

const SafeArea = styled.SafeAreaView`
    flex: 1;
`;