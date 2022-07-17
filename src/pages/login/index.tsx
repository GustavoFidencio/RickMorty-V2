import React from "react";
import styled from 'styled-components/native';
import { View, Text, SafeAreaView } from 'react-native';

import { Input } from '@components/input';

export const Login = ({ }) => {

    return (
        <SafeArea>
            <View>
                <Text style={{ backgroundColor: 'red' }}>
                    Login
                </Text>
                <Input
                    placeholder="Name"
                />
                <Input
                />
            </View>
        </SafeArea>
    )
}

const SafeArea = styled.SafeAreaView`
    flex: 1;
`;