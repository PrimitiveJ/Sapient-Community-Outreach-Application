

// import native react functions
import React, { createContext, useContext, useState } from 'react';

const GlobalStylesContext = createContext();
export const useGlobalStyles = () => useContext(GlobalStylesContext);

export const GlobalStylesProvider = ({ children, style }) => {

    return (
        <GlobalStylesContext.Provider value={style}>
            {children}
        </GlobalStylesContext.Provider>
    );
}


