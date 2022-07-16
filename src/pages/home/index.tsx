import React from "react";
import { View, Text, SafeAreaView } from 'react-native';

export const Home = ({ }) => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <Text style={{ backgroundColor: 'red' }}>
                Home
            </Text>
        </SafeAreaView>
    )
}