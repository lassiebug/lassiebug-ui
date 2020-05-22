import React, { FC } from 'react';
import styled from 'styled-components';


type Sizes = 'sm' | 'md' | 'lg';
type Types = 'primary' | 'danger' | 'success' | 'warning';

interface ButtonProps {
    size:Sizes;
    type:Types;
    value:string;
    flat:boolean;
}

const get_color = (color?:Types) => {
    if(!color)return 'var(--primary)';
    return `var(--${color})`;
}

const StyledButton = styled.button`

    border:${(props:ButtonProps) => {
        if(props.flat) {
            return `2px solid ${get_color(props.type)}`
        } else {
            return 'none';
        }
    }};
    background-color:${(props:ButtonProps) => {
        if(props.flat) {
            return 'none';
        } else {
            return get_color(props.type);
        }

    }};

    padding:.5rem 1rem;
    border-radius:5px;

    color:var(--black);

    cursor: pointer;
    transition:var(--shadow-transition), transform .2s;

    ${(props:ButtonProps) => {
        if(props.flat)return 'none';
        return `
            box-shadow:var(--shadow-00);
            &:hover {
                box-shadow:var(--shadow-10);
            }

            &:target, &:active {
                box-shadow:var(--shadow-00);
                transform:translate3d(0, 2px, 0);
            }
        `;
    }};

`;

const Button:FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton {...(props as any)}>
            { props.value }
        </StyledButton>
    )
}

export default Button;
