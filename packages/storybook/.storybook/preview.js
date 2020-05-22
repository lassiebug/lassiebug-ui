import React from 'react';
import { addDecorator } from '@storybook/react';
import { Colors, Typeography, Shadows } from '@lassiebug/styles';

addDecorator(fn => {
    return (
        <>
            {fn()}
            <Colors/>
            <Typeography/>
            <Shadows/>
        </>
    )
})
