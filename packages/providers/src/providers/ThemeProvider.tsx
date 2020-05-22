import React from 'react';
import { Theme } from '../themes';
import { LightTheme } from '../themes/light';

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeState>({
    theme: LightTheme,
    setTheme() {},
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(LightTheme);
    const state: ThemeState = {
        theme,
        setTheme,
    };
    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
