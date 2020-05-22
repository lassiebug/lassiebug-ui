import React from 'react';
import { Button } from '@lassiebug/ui-input';

export default { 
    title: '@lassiebug/input/Button',
    component: Button
}

const testText = 'Hello World';

export const button = () => {
    return (
        <div>
            <p>sm</p>
            <Button 
                value={testText}
                sizeType="sm"
            />
            <p>md</p>
            <Button
                value={testText}
                sizeType="md"
            />
            <p>lg</p>
            <Button
                value={testText}
                sizeType="lg"
            />
        </div>
    )
}

export const flat = () => {
    return (
        <div>
            <p>Normal</p>
            <Button
                value={testText}
            />
            <p>Flat</p>
            <Button
                value={testText}
                flat={true}
            />
        </div>
    );
}

export const colors = () => {
    return (
        <div style={{ display:'flex', justifyContent:'space-around' }}>
            <Button
                value={testText}
                type='primary'
            />
            <Button
                value={testText}
                type='success'
            />
            <Button
                value={testText}
                type='warning'
            />
            <Button
                value={testText}
                type='danger'
            />
        </div>
    );
}
