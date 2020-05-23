import React from 'react';
import { Select } from '@lassiebug/input';

export default {
    title: '@lassiebug/input/Select',
    component: Select,
};

export const normal = () => {
    const [items, setItems] = React.useState(['item 1', 'item 2', 'item 3']);
    return <Select items={items} label="My Select" />;
};
