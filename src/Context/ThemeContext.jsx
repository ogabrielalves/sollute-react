import React, { useState } from 'react';
import { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import themes from '../Themes/Themes';

export const ThemeContext = createContext(
    {}
)

function ThemeContextProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState('light');
    
    return (
        <ThemeContext.Provider value={currentTheme}>
            <ThemeProvider theme={themes}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;