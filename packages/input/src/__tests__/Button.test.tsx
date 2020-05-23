import React from 'react';
import Button from '../components/buttons';
import { render, fireEvent } from '@testing-library/react';

const click = jest.fn();

test('<Button>', () => {
    const { getByTestId } = render(
        <Button flat value="hello" onClick={click} />,
    );

    const button = getByTestId('button');
    expect(button.innerHTML).toBe('hello');

    fireEvent.click(button);
    expect(click).toHaveBeenCalledTimes(1);
});
