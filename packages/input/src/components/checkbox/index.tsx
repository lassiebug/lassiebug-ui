import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    background?: string;
    label?: string;
}

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    transition: all 150ms;
    background-color: ${(props: Props) =>
        props.checked ? 'var(--primary)' : 'var(--white)'};
    ${HiddenCheckbox}:focus + & {
    }
    ${Icon} {
        visibility: ${(props: Props) => (props.checked ? 'visible' : 'hidden')};
    }
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
`;

const StyledLabel = styled.label`
    cursor: pointer;
    user-select: none;
`;

const Checkbox: FC<Props> = ({ className, checked, label, ...props }) => (
    <StyledLabel>
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...(props as any)} />
            <StyledCheckbox checked={checked} {...props}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
        <span> {label}</span>
    </StyledLabel>
);

export default Checkbox;
