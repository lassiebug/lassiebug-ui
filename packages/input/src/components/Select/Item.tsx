import React, { FC, MouseEvent, LiHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
    label: string;
    value: number;
    onClick: (e: MouseEvent) => void;
    index?: number;
}

const StyledSelectItem = styled.li`
    border-bottom: 1px solid var(--line);
    box-sizing: border-box;
    &:last-child {
        border-bottom: none;
    }

    button {
        background: none;
        border: none;
        margin: 0;
        text-align: left;
        padding: var(--padding-05);
        width: 100%;
        cursor: pointer;
    }
`;

const SelectItem: FC<ItemProps> = ({ value, label, onClick, index }) => (
    <StyledSelectItem
        style={{
            backgroundColor:
                value === index ? 'var(--black)' : 'var(--content)',
        }}
    >
        <button
            value={value}
            onClick={onClick}
            style={{
                color: value === index ? 'var(--primary)' : 'var(--text)',
            }}
        >
            {label}
        </button>
    </StyledSelectItem>
);

export default SelectItem;
