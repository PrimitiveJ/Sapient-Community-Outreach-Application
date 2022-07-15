
What's the difference between the 'components' folder and the 'components.styles' sub
folder? 

All components that only exist to be RENDERED with no STATE or extra FUNCTIONALITY should
go inside of 'components.styles'. This folder holds all 'style-components', a special kind of
component derived from the styled-components library.

All components that have STATE, COMPLEX FUNCTIONALITY, or REACT HOOKS should be placed directly
inside the 'components' folder.


- Will

