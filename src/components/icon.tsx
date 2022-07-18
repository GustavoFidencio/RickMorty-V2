import React, { memo } from "react";
import { StyleProp, TextStyle } from 'react-native';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type libs =
    'zocial' |
    'entypo' |
    'feather' |
    'fontisto' |
    'ionicons' |
    'evilicons' |
    'octicons' |
    'antdesign' |
    'foundation' |
    'materialicons' |
    'fontawesome' |
    'fontawesome5' |
    'simplelineicons' |
    'materialcommunityicons';

type IconProps = {
    lib?: libs
    name: string
    color?: string
    size: number
    style?: StyleProp<TextStyle>
};

export const Icon = memo(({ name, lib = 'fontawesome', size, style, color }: IconProps) => {

    const props = {
        name,
        color: color,
        style: [{ fontSize: size }, style],
    };

    const libs = {
        zocial: <Zocial {...props} />,
        entypo: <Entypo {...props} />,
        feather: <Feather {...props} />,
        fontisto: <Fontisto  {...props} />,
        ionicons: <Ionicons {...props} />,
        octicons: <Octicons {...props} />,
        evilicons: <EvilIcons {...props} />,
        antdesign: <AntDesign  {...props} />,
        foundation: <Foundation  {...props} />,
        materialicons: <MaterialIcons {...props} />,
        fontawesome: <FontAwesome  {...props} />,
        fontawesome5: <FontAwesome5 {...props} />,
        simplelineicons: <SimpleLineIcons {...props} />,
        materialcommunityicons: <MaterialCommunityIcons  {...props} />,
    };

    return libs[lib];
})