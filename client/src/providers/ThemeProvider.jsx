// import native react functions
import React, { createContext, useContext, useState } from 'react';

// create a new global context for themes
const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

// create the ThemeProvider component wrapper
export const ThemeProvider = ({ children }) => {

    /*
    This is where theme updating is stored/handled. Once this state updates, all
    child components should be re-rendered.
    */
    const [theme, setTheme] = useState('default');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
