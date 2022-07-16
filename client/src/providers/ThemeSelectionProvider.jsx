// import native react functions
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themeList from '../themes';

// create a new global context for themes
const ThemeSelectionContext = createContext();
export const useThemeContext = () => useContext(ThemeSelectionContext);

// create the ThemeProvider component wrapper
export const ThemeSelectionProvider = ({ children }) => {

    /*
    This is where theme updating is stored/handled. Once this state updates, all
    child components should be re-rendered.
    */
    const [theme, setTheme] = useState('default');
    const [themeData, setThemeData] = useState(themeList[theme])

    return (
        <ThemeSelectionContext.Provider value={{theme, themeData, setThemeData, setTheme}}>
            <ThemeProvider theme={{...themeData}}>
                {children}
            </ThemeProvider>
        </ThemeSelectionContext.Provider>
    );
}
