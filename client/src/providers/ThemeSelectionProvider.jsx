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

        /*
            This is our custom theme provider which passes down:
                * theme: name of current selected theme
                * themeData: an object of theme data about the currently selected theme
                * setThemeData: update the global theme data object
                * setTheme: update the global theme, which will also change the themeData upon re-render
        */
        <ThemeSelectionContext.Provider value={{theme, themeData, setThemeData, setTheme}}>

            {/* 
                This is the ThemeProvider from the styled-components library. This allows us to
                access the 'theme' object inside the props of styled-components.
            */}
            <ThemeProvider theme={themeData}>
                {children}
            </ThemeProvider>
        </ThemeSelectionContext.Provider>
    );
}
