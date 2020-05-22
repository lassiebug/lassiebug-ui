import React from 'react';
import { addDecorator } from '@storybook/react';
import Styles from '@lassiebug/styles';

addDecorator(fn => {
    return (
        <>
            {fn()}
            <Styles/>
        </>
    )
})
