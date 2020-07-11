import React, { FC } from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--content);
    min-height: 40px;

    h3 {
        padding: 0 var(--padding-10);
    }

    .__render-prop {
        padding: var(--padding-10);
    }

    .__items {
        display: flex;
        min-height: 40px;

        align-items: center;
    }
`;

const HeaderItemStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    background-color: var(--content);
    padding: var(--padding-10);
    cursor: pointer;
    user-select: none;

    &.__active {
        background-color: var(--content-contrast);
    }
`;

interface HeaderItemProps {
    active?: boolean;
}

interface HeaderProps {
    title?: string;
    left?(): JSX.Element;
    right?(): JSX.Element;
}

interface HeaderFC<t> extends FC<t> {
    Item: FC<HeaderItemProps>;
}

const Header: HeaderFC<HeaderProps> = ({ title, left, right, children }) => (
    <HeaderStyles>
        <div className="__items">
            {left && <div className="__render-prop">{left()}</div>}
            <h3>{title}</h3>
        </div>
        <div className="__items">
            {children}
{right && <div className="__render-prop">{right()}</div>}
        </div>
    </HeaderStyles>
);

const HeaderItem: FC<HeaderItemProps> = ({ children, active }) => (
    <HeaderItemStyles className={active ? '__active' : ''}>
        {children}
    </HeaderItemStyles>
);

Header.Item = HeaderItem;

export default Header;
