import React, { FC } from 'react';
import styled from 'styled-components';

type Sizes = 'sm' | 'md' | 'lg';
type Types = 'primary' | 'danger' | 'success' | 'warning';

interface ButtonProps {
    size: Sizes;
    type: Types;
    value: string;
    flat: boolean;
}

const get_color = (color?: Types) => {
    if (!color) return 'var(--primary)';
    return `var(--${color})`;
};

const StyledButton = styled.button`
    border: ${(props: ButtonProps) => {
        if (props.flat) {
            return `2px solid ${get_color(props.type)}`;
        } else {
            return 'none';
        }
    }};
    background-color: ${(props: ButtonProps) => {
        if (props.flat) {
            return 'var(--transparent)';
        } else {
            return get_color(props.type);
        }
    }};

    padding: 0.5rem 1rem;
    border-radius: 5px;

    color: var(--black);

    cursor: pointer;
    transition: var(--shadow-transition), transform 0.2s, color 0.5s,
        background-color 0.2s;

    &:target,
    &:active {
        transform: translate3d(0, 2px, 0);
    }
    ${(props: ButtonProps) => {
        if (props.flat)
            return `
            color:var(--text);
            &:hover {
                color:var(--text-contrast);
                background-color:${get_color(props.type)};
            }
        `;
        return `
            box-shadow:var(--shadow-00);
            &:hover {
                box-shadow:var(--shadow-10);
            }

            &:target, &:active {
                box-shadow:var(--shadow-00);
            }
        `;
    }};
`;

const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <StyledButton {...(props as any)}>{props.value}</StyledButton>
);

export default Button;
