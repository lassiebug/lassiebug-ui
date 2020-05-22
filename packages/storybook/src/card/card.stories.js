import React from 'react';
import { Card } from '@lassiebug/card';
import { Button } from '@lassiebug/ui-input';

export default {
    title: '@lassiebug/card/Card',
    compoent: Card,
};

export const body = () => (
    <Card>
        <p>Hello World Card</p>
    </Card>
);

export const header = () => (
    <Card header={() => <p>hello world header</p>}>
        <p>Card Body</p>
    </Card>
);

export const footer = () => (
    <Card footer={() => <p>Hello world footer</p>}>
        <p>Card Body</p>
    </Card>
);

export const hoverable = () => (
    <Card hoverable>
        <p>Card Body</p>
    </Card>
);

export const flat = () => (
    <Card flat>
        <p>Card Body</p>
    </Card>
);

export const example = () => (
    <Card
        header={() => <p>Kids See Ghosts</p>}
        footer={() => (
            <>
                <Button flat value="Save" type="primary" />
                <Button flat value="Play" type="success" />
            </>
        )}
        width="300px"
        height="500px"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Kj_nwdS7_17WIcoPQQqg5gHaEo%26pid%3DApi&f=1"
    >
        <p>
            Kids See Ghosts is an American hip hop super-duo composed of
            musicians Kanye West and Kid Cudi. The duo released their eponymous
            debut album on June 8, 2018, through GOOD Music
        </p>
    </Card>
);
