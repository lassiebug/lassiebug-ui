import React from 'react';
import { Colors, Typeography } from '@lassiebug/styles';

export default {
    title: '@lassiebug/styles',
};

const Card = ({ color, textColor }) => (
    <div
        style={{
            padding: '1rem',
            borderRadius: 'var(--corner)',
            backgroundColor: color,
        }}
    >
        <h6 style={{ margin: 0, color: textColor }}>{color}</h6>
    </div>
);

const Grid = ({ children }) => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: 'var(--padding-05)',
        }}
    >
        {children}
    </div>
);

export const colors = () => (
    <>
        <h3>Palette</h3>
        <Grid>
            <Card color="var(--background)" />
            <Card color="var(--foreground)" textColor="var(--text-contrast)" />
            <Card color="var(--black)" />
            <Card color="var(--red)" />
            <Card color="var(--green)" textColor="var(--text-contrast)" />
            <Card color="var(--yellow)" textColor="var(--text-contrast)" />
            <Card color="var(--blue)" />
            <Card color="var(--magenta)" />
            <Card color="var(--cyan)" />
            <Card color="var(--white)" textColor="var(--text-contrast)" />
            <Colors />
        </Grid>
        <h3>Theming</h3>
        <Grid>
            <Card color="var(--primary)" />
            <Card color="var(--secondary)" />
            <Card color="var(--warning)" textColor="var(--text-contrast)" />
            <Card color="var(--danger)" />
            <Card color="var(--success)" textColor="var(--text-contrast)" />
            <Card color="var(--text)" textColor="var(--text-contrast)" />
            <Card color="var(--text-contrast)" />
            <Card color="var(--content)" />
        </Grid>
    </>
);

export const typeography = () => (
    <div>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h7>h7</h7>
        <p>the quick brown fox jumps over the lazy dog</p>
        <Typeography />
    </div>
);
