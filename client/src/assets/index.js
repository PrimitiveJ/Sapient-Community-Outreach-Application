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

use case example:

    import { images } from '...';
    console.log(images.appLogo.base)  //--> '../assets/images/branding/logo-0.png'

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

/*
    * Images collection

    if you want to create a native reference to an image, create a new entry
    in one of the image categories:

        - branding
        - background
        - icons

    any general-purpose image can just go in 'icons'
*/
export const images = {
    branding: {
        appLogo: {
            base: importImage('logo-05.png'),
            // lights: importImage('logo-0-lights.png')
        }
    },

    icons: {
        thing: importImage('idk.png'),
    },

    backgrounds: {
        landingPageHeader: importImage('landing-page-header.jpg'),
        lakeCleanup: importImage('lake-cleanup.jpg'),
        eventPageBackground: importImage('treesimage.jpg'),
    }
}

// nothing here yet
export const audio = {

}

export default {
    images,
    audio
}