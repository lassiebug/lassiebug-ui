import React, {
    FC,
    useState,
    useEffect,
    MouseEvent,
    LiHTMLAttributes,
} from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useResizeObserver from 'use-resize-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import SelectItem from './Item';

interface Item {
    id: string;
    label: string;
}

interface Props {
    items: Item[];
    label?: string;
    onChange?: (item: string, index: number) => void;
}

const HiddenSelect = styled.select`
    opacity: 0;
    height: 0;
`;
const StyledSelect = styled.div`
    min-width: 100px;
    border-bottom: 1px solid var(--black);

    padding: var(--padding-05);

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    font-weight: bold;
`;
const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    label {
        user-select: none;
        cursor: pointer;
        color: var(--text);
    }
`;

const StyledOptions = styled.ul`
    position: relative;

    list-style-type: none;

    z-index: var(--layer-10);

    border-bottom-left-radius: var(--corner);
    border-bottom-right-radius: var(--corner);

    background-color: var(--content);
    margin: 0;
    padding: 0;
`;

const Select: FC<Props> = ({ children, label, onChange, items }) => {
    const [on, toggle] = useState(false);
    const [title, setTitle] = useState(label || '');
    const [index, setIndex] = useState<number>();

    const { ref, height } = useResizeObserver<any>();

    useEffect(() => {
        if (onChange && index !== undefined) onChange(title, index);
    }, [index, title]);

    /* Start Animations */
    const borderSpring = useSpring({
        width: on ? '100%' : '0%',
        height: 2,
        background: 'var(--primary)',
        position: 'absolute',
        bottom: 0,
    });

    const iconSpring = useSpring({
        transform: on ? 'rotate(180deg)' : 'rotate(0deg)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text)',
    });

    const optionsSpring = useSpring({
        height: on ? height : 0,
        pointerEvents: on ? 'all' : 'none',
        overflow: 'hidden',
        width: '100%',
        position: 'absolute',
        boxSizing: 'border-box',
        boxShadow: 'var(--shadow-10)',
    });
    /* End Animations */

    return (
        <Wrapper>
            <HiddenSelect>{children}</HiddenSelect>

            <StyledSelect onClick={() => toggle(!on)}>
                <label>{title}</label>
                <animated.button style={iconSpring}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </animated.button>
            </StyledSelect>

            <animated.span style={borderSpring}></animated.span>

            <animated.div style={optionsSpring}>
                <div ref={ref}>
                    <StyledOptions onClick={() => toggle(false)}>
                        {items.map((item, i) => (
                            <SelectItem
                                key={i}
                                label={item.label}
                                value={i}
                                index={index}
                                onClick={() => {
                                    setTitle(item.label);
                                    setIndex(i);
                                }}
                            />
                        ))}
                    </StyledOptions>
                </div>
            </animated.div>
        </Wrapper>
    );
};

export default Select;
