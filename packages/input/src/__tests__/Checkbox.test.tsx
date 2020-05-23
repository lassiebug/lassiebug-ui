import React from 'react';
import Checkbox from '../components/Checkbox';
import { cleanup, render, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const onChange = jest.fn();
test('<Checkbox>', () => {
    const { getByTestId } = render(
        <Checkbox label="Hello" onChange={onChange} />,
    );

    const label = getByTestId('label');
    const hiddenCheckbox = getByTestId('hidden-checkbox');

    expect(label.textContent).toBe('Hello');

    fireEvent.click(hiddenCheckbox);

    expect(onChange).toHaveBeenCalledTimes(1);
});
