import { ThemeProvider } from 'styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { theme } from '../../../styles';
import { DoneItemCreator } from '.';

describe('DoneItemCreator', () => {
    it('should call onCreate', () => {
        const mockOnCreate = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <DoneItemCreator onCreate={mockOnCreate} />
            </ThemeProvider>,
        );

        const button = screen.getByText('DoneItemCreator');

        expect(button).toHaveStyleRule('background-color', '#8a2d87');
        expect(button).toHaveStyleRule('color', '#ffffff');
        expect(button).toHaveStyleRule('border-color', '#8a2d87');
        expect(button).toHaveStyleRule('width', 'auto');
        expect(button).toHaveStyleRule('min-width', '13.6rem');
    });
});
