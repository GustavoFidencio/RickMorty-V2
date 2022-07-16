import React from "react";
import styled from 'styled-components/native';
import { View, Text, SafeAreaView } from 'react-native';

export const Login = ({ }) => {

    return (
        <SafeArea>
            <View>
                <Text style={{ backgroundColor: 'red' }}>
                    Login
                </Text>
            </View>
        </SafeArea>
    )
}

const SafeArea = styled.SafeAreaView`
    flex: 1;
`;