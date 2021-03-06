import React from 'react';
import { Checkbox } from '@lassiebug/input';

export default {
    title: '@lassiebug/input/Checkbox',
    component: Checkbox,
};

export const normal = () => {
    const [active, setActive] = React.useState(false);
    return (
        <Checkbox
            checked={active}
            onChange={() => setActive(!active)}
            label="My Checkbox"
        />
    );
};
