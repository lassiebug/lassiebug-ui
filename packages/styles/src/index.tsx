import { createGlobalStyle } from 'styled-components';
import React, { FC } from 'react';

const Colors = createGlobalStyle` 
    font-size:20px;
    :root {

        --black:#282c34;
        --red:#ed254e;
        --green:#71f79f;
        --yellow: #f9dc5c;
        --blue: #7cb7e1;
        --magenta:#c74ded;
        --cyan:#00c1e4;
        --white:#dcdfe4;

        --background:#292f38;
        --foreground: #c3c7d1;
        --content:#353940;
        --content-contrast:var(--black);

        --transparent:rgba(0, 0, 0, 0);

        --text:var(--white);
        --text-contrast:var(--black);

        --primary:var(--blue);
        --secondary:var(--black);
        --warning:var(--yellow);
        --danger:var(--red);
        --success:var(--green);
    }
`;

const Typeography = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, h7, p, a, li, div, input, label, button {
        margin:0;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
        color:var(--text);
    }
    h1 {
        font-size:2.5rem;
    }
    h2 {
        font-size:2rem;
    }
    h3 {
        font-size:1.75;
    }
    h4 {
        font-size:1.5rem;
    }
    h5 {
        font-size:1.25rem;
    }
    h6 {
        font-size:1rem;
    }
    p {
        font-size:1rem;
    }
`;

const Shadows = createGlobalStyle`
    :root {
        --shadow-transition:all 0.3s cubic-bezier(.25,.8,.25,1);

        --shadow-00:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        --shadow-10:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        --shadow-20:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        --shadow-30:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        --shadow-40:0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
`;

const Borders = createGlobalStyle`
    :root {
        --corner:5px;
    }
`;

const Padding = createGlobalStyle`
    :root {
        --padding-00:0rem;
        --padding-05:.5rem;
        --padding-10:1rem;
        --padding-20:2rem;
    }
`;

const Root = () => (
    <>
        <Colors />
        <Typeography />
        <Shadows />
        <Borders />
        <Padding />
    </>
);

export { Colors, Typeography, Shadows, Borders, Padding };

export default Root;
