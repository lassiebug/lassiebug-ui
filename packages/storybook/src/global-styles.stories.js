import React from 'react';
import { Colors, Typeography } from '@lassiebug/styles';

export default {
    title:'@lassiebug/styles',
}

const Card = ({ color, title }) => (
    <div style={{ width:200, height:400, padding:'1rem', margin:'1rem', backgroundColor:color }}>
        <p style={{ margin:0 }}>{ color }</p>
    </div>
)

export const colors = () => {
    return (
        <div style={{ display:'flex', flexWrap:'wrap' }}>
            <Card color="var(--background)"/>
            <Card color="var(--foreground)"/>
            <Card color="var(--black)"/>
            <Card color="var(--red)"/>
            <Card color="var(--green)"/>
            <Card color="var(--yellow)"/>
            <Card color="var(--blue)"/>
            <Card color="var(--magenta)"/>
            <Card color="var(--cyan)"/>
            <Card color="var(--white)"/>
            <Colors/>
        </div>
    )
}

export const typeography = () => {
    return (
        <div>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <h7>h7</h7>
            <p>the quick brown fox jumps over the lazy dog</p>
            <Typeography/>
        </div>
    )
}
