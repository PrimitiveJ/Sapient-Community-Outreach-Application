
# Importing/Using Assets

To import any kind of asset, such as an image, you can use the inhouse asset API to make dealing with assets in react a bit easier. To access this API, just locate the relative path from wherever you are to the assets folder and import the assets folder.

**Example**
```javascript
import assets from '.../assets';
```

Once you've imported assets, it will return an object of asset categories. Right now there are only two:

- `Images`
- `Audio`

You can destructure these categories upon import:

```javascript
import { images, audio } from '.../assets';
```

Or just import the library and index the object for whichever category you need:

```javascript
import assets from '.../assets';
console.log( assets.images ) // --> all images
console.log( assets.audio ) // --> all audio
```

# Setting Images

Currently, there are three sub-categories of images:
- `backgrounds`
    * For holding images that are specifically intended to be used as a background
- `brand`
    * For holding images that are related to our brand
- `icons`
    * For holding any small images that can be used for buttons, status indicators, labels, etc.

If you want to access an image in any of these categories, first you have to add that image to the sub folder **manually**, then go inside the `index.js` file in the `assets` folder and create a new entry in the `images.<sub category>` object.

For example, if you wanted to add a new icon to the image references, it would look something like this:

```javascript
export const images = {
    backgrounds: {
        backgroundName: 'file.png',
    },

    branding: {
        logo: 'file.png'
    },

    icons: {
        myNewIcon: 'myIcon.png'; // <--- your new icon
    }
}
```

**note:** You don't need to add the path for the image file, just the name of the file as-is plus the file extension at the end.

# Getting Images

Once you have an image added to the `assets` folder and added it in the `index.js` code, you can retrieve it by indexing the assets object that you imported. Using the icon example from before, you could access that image by doing this:

```javascript
import { images } from '.../assets';

// the reference to your image
const myImagePath = images.icons.myNewIcon;

// creating an image tag as an example
const MyImage = <img src={myImagePath}/>
```

That's all for now