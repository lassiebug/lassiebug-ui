import React from 'react';
import { Button, Checkbox } from '@lassiebug/input';

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

export const colors = () => {
    const [flat, setFlat] = React.useState(false);
    return (
        <>
            <Checkbox
                checked={flat}
                onChange={() => setFlat(!flat)}
                label="Flat"
            />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button value={testText} type="primary" flat={flat} />
                <Button value={testText} type="success" flat={flat} />
                <Button value={testText} type="warning" flat={flat} />
                <Button value={testText} type="danger" flat={flat} />
            </div>
        </>
    );
};
