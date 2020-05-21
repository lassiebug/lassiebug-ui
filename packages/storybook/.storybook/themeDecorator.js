import React from 'react';

// import { ThemeProvider } from '@lassiebug/ui-providers';
require('react');
const { ThemeProvider } = require('@lassiebug/ui-providers');


const ThemeDecorator = storyfn => (
    <ThemeProvider>
        { storyfn() } 
    </ThemeProvider>    
)

export default ThemeDecorator;
