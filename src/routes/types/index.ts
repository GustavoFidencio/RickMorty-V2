import { RouteConfig } from '@react-navigation/native';

export type RootStackParamList = {
    Tab: undefined;
    Login: undefined;
    Home: undefined;
    Splash: undefined;
};

type RouteProps = RouteConfig<RootStackParamList, keyof RootStackParamList, any, any, any>

export type ScreensProp = {
    name: string
    component: () => JSX.Element
} & RouteProps;