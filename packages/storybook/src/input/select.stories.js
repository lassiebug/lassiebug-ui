import React from 'react';
import { Select } from '@lassiebug/input';

export default {
    title: '@lassiebug/input/Select',
    component: Select,
};

export const normal = () => {
    const [items, setItems] = React.useState([
        { id: '1', label: 'item 1' },
        { id: '2', label: 'item 2' },
        { id: '3', label: 'item 3' },
    ]);
    return <Select items={items} label="My Select" />;
};
