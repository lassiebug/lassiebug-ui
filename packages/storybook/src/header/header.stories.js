import React from 'react';
import Header from '@lassiebug/header';
export default {
    title: '@lassiebug/header',
    component: Header,
};

export const top = () => (
    <Header title="Title">
        <Header.Item active>Blah</Header.Item>
        <Header.Item>Blah</Header.Item>
        <Header.Item>Blah</Header.Item>
    </Header>
);
