import '@testing-library/jest-dom';
import React from 'react';
import Button from '../components/buttons';
import { render } from '@testing-library/react';
test('<Button>', () => {
    const { debug, getByTestId } = render(
        <Button flat value="hello" type="primary" />,
    );
    expect(true).toBeTruthy();
    expect(getByTestId('button').innerHTML).toBe('hello');
});
