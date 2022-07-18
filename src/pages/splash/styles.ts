import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export const Image = styled.Image`
    width: ${width / 2}px;
    height: ${width / 2}px;
`;

export const SafeArea = Animated.createAnimatedComponent(styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`);