import React from 'react';
import { Button } from '@lassiebug/ui-input';

export default {
    title: '@lassiebug/input/Button',
    component: Button,
};

const testText = 'Hello World';

export const normal = () => (
    <div>
        <Button value={testText} />
    </div>
);

export const flat = () => (
    <div>
        <p>Normal</p>
        <Button value={testText} />
        <p>Flat</p>
        <Button value={testText} flat={true} />
    </div>
);

export const colors = () => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button value={testText} type="primary" />
        <Button value={testText} type="success" />
        <Button value={testText} type="warning" />
        <Button value={testText} type="danger" />
    </div>
);
