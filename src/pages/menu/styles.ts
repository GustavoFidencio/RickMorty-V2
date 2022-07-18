import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = Animated.createAnimatedComponent(styled.SafeAreaView`
    flex: 1;
`);