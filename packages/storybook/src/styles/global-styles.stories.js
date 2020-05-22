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
        <p>
            Doloremque quos ut enim dolorum quas sit eligendi. Quia deserunt
            perferendis cumque rerum quibusdam autem. Sint ad consequatur
            reiciendis exercitationem earum ducimus minima. Ipsa eaque porro
            repellendus occaecati cupiditate expedita enim perspiciatis.
            Doloribus consequuntur minus accusamus suscipit tempora eveniet at.
        </p>
        <p>
            Adipisci sed est soluta alias temporibus et. Dolorum eum cupiditate
            sunt et reprehenderit ut. Saepe quis maxime et odit voluptates qui
            unde sapiente.
        </p>
        <p>
            Et aperiam eos aut sint non accusamus distinctio sed. Debitis qui
            velit illo nihil nisi aut ipsa dolor. Est sed temporibus ratione
            fugiat tempora ratione quos fuga.
        </p>
        <p>
            Et officia esse sed porro qui. Porro ut expedita sed. Repellat qui
            rerum rerum corrupti.
        </p>
        <p>
            Illum omnis iusto expedita iure nemo sunt. Tenetur delectus impedit
            sapiente est aut officia. Aut ex possimus et id ratione. Quos
            voluptatibus eos esse est modi voluptas tenetur. Explicabo
            dignissimos sint placeat incidunt. Nemo beatae qui provident.
        </p>
        <Typeography />
    </div>
);
