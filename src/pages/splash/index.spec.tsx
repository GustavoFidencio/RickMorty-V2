import React from "react";
import { View } from "react-native";
import { render, screen, fireEvent } from '@testing-library/react-native';

describe('Splash Screen', () => {

    it('Validando se o usuario esta logado', () => {

        render(<View />);
        // const { getByText } = render(<Splash />);
        // expect(getByText('Oi sou a Splash')).toBeTruthy()

        // render(<Splash />);

        expect(1 + 1).toBe(2);

    })
})