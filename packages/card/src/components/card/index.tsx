import React, { FC, ReactHTML } from 'react';
import styled from 'styled-components';

interface CardProps {
    header?: () => ReactHTML;
    footer?: () => ReactHTML;
    width?: string;
    height?: string;
    img?: string;
    flat?: boolean;
    hoverable?: boolean;
}

const Styles = styled.div`
    background-color: var(--content);
    border-radius: var(--corner);
    box-shadow: var(--shadow-00);
    display: flex;
    flex-direction: column;

    transition: var(--shadow-transition);
    &.--flat {
        box-shadow: none;
        border: 1px solid var(--black);
    }
    &.--hoverable:hover {
        box-shadow: var(--shadow-20);
        cursor: pointer;
    }
    .__card-body {
        padding: var(--padding-10);
        flex-grow: 1;
    }
    .__card-header,
    .__card-footer {
        padding: var(--padding-05);
        display: flex;
        justify-content: space-between;
    }

    .__card-header p {
        font-size: 1.75rem;
    }

    .__card-footer {
        background-color: var(--content-contrast);
    }
    img {
        width: 100%;
    }
`;

const Card: FC<CardProps> = ({
    children,
    header,
    footer,
    width,
    height,
    img,
    flat,
    hoverable,
}) => (
    <Styles
        style={{ width, minHeight: height }}
        className={`${flat ? '--flat' : ''} ${hoverable ? '--hoverable' : ''}`}
    >
        {header ? <div className="__card-header">{header()}</div> : null}
        {img ? <img src={img} /> : null}
        <div className="__card-body">{children}</div>
        {footer ? <div className="__card-footer">{footer()}</div> : null}
    </Styles>
);

export default Card;
