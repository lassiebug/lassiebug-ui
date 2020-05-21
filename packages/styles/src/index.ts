import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle` 
    font-size:20px;
    :root {
        --background:#292f38;
        --foreground: #c3c7d1;

        --black:#282c34;
        --red:#ed254e;
        --green:#71f79f;
        --yellow: #f9dc5c;
        --blue: #7cb7e1;
        --magenta:#c74ded;
        --cyan:#00c1e4;
        --white:#dcdfe4;
    }
`;

const Typeography = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, h7, p {
        margin:0;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    h1 {
        font-size:6rem;
    }
    h2 {
        font-size:5rem;
    }
    h3 {
        font-size:4rem;
    }
    h4 {
        font-size:3.5rem;
    }
    h5 {
        font-size:3rem;
    }
    h6 {
        font-size:2.7rem;
    }
    h7 {
        font-size:2.5rem;
    }
    p {
        font-size:1.3rem;
    }
`;

export {
    Colors,
    Typeography
}
