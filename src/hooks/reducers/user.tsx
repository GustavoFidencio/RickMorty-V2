import { UserProps } from '../types';
import { StorageService } from '@services/storage';

type ReducerProps = {
    type: string
    email?: string
    password?: string
};

const _default = (state: UserProps) => state;

const _clear = () => {
    StorageService.clearItem('@email');
    return { email: '', password: '' };
};

const _setEmail = (state: UserProps, email: string) => ({ ...state, email });

const _setPassword = (state: UserProps, password: string) => ({ ...state, password });

export const UserReducer = (state: UserProps, { type, email, password }: ReducerProps) => {

    const actions = {
        clear: _clear(),
        default: _default(state),
        setEmail: _setEmail(state, email),
        setPassword: _setPassword(state, password),
    }

    return actions[type] || actions["default"];
}
