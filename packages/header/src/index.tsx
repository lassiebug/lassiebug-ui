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

    .__items {
        display: flex;
        height: 40px;
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

interface HeaderFC<t> extends FC<t> {
    Item: FC<HeaderItemProps>;
}

interface HeaderProps {
    title?: string;
    Item: () => any;
}

const Header: HeaderFC<HeaderProps> = ({ title, children }) => (
    <HeaderStyles>
        <h3>{title}</h3>
        {children && <div className="__items">{children}</div>}
    </HeaderStyles>
);

interface HeaderItemProps {
    active?: boolean;
}
const HeaderItem: FC<HeaderItemProps> = ({ children, active }) => (
    <HeaderItemStyles className={active ? '__active' : ''}>
        {children}
    </HeaderItemStyles>
);

Header.Item = HeaderItem;

export default Header;
