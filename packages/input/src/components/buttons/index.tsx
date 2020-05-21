import React, { 
    FC, 
    InputHTMLAttributes,
} from 'react';

import { useTheme, Theme } from '@lassiebug/ui-providers';

import styled from 'styled-components';


type Sizes = 'sm' | 'md' | 'lg';
type Types = 'primary' | 'danger' | 'success' | 'warning';
interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
    readonly Tag?:string;
    readonly key?:string;
    sizeType:Sizes;
    flat?:boolean;
    type:Types;
}

const input = ({sizeType,flat, type}:ButtonProps, theme:Theme) => {
    let padding:number = 0;
    let fontSize:number = 0;;

    let background = 'red';
    let color = theme.textContrast;
    let border = 'none';

    switch(sizeType) {
        case 'sm':
            padding = .5;
            fontSize = 1;
            break;
        case 'md':
        default:
            padding = .5;
            fontSize = 1.3;
            break;
        case 'lg':
            padding = 1;
            fontSize = 1.5;
            break;
    }

    switch(type) {
        case 'primary':
        default:
            background = theme.primary;
            break;
        case 'warning':
            background = theme.warning;
            break;
        case 'danger':
            background = theme.danger;
            break;
        case 'success':
            background = theme.success;
            break;
    }

    if(flat) {
        color = background;
        border = `3px solid ${background}`;
        background = 'none';
    }

    return styled.input`
        padding:${padding}rem ${padding + .5}rem;
        font-size:${fontSize}rem;
        border:${border};
        background:${background};
        border-radius:5px;
        color:${color};
        cursor:pointer;
    `;
}

export const Button:FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const Input = input(props, theme);
    console.log('got theme??', theme);
    return (
        <Input 
            {...props } 
            type="button"
        />
        );
}
