/*
================
| ASSET LOADER |
==================================================================================================================================

? @doc-name:            index.js
? @doc-created:         07/13/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This file is responsible for the handling of asset imports.

==================================================================================================================================

*/

// testing

// const importAll = req => req.keys().map(item => req(item));
// export const images = importAll(require.context('./images'));

// made an image importer :D -Will
const importImage = fileName => {
    const requireContext = require.context('./images');
    const fileLocation = requireContext.keys().find(file => file.match(fileName));
    const file = requireContext(fileLocation);

    return file;
}

export const images = {
    brand: {
        appLogo: {
            base: importImage('logo-0.png'),
            // lights: importImage('logo-0-lights.png')
        }
    },

    icons: {
        thing: importImage('idk.png')
    }
}

export const audio = {

}

