
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
