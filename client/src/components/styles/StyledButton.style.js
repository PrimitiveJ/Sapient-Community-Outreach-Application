

import styled from 'styled-components';


export const StyledRoundButton = styled.button`

    padding: 10px 25px;
    border: 0;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgroundTwo || ''};
    color: ${({theme}) => theme.textColorOne};

`

// todo: think of better way to create property inheritance
export const StyledDefaultButton = styled.button`

    padding: 10px 25px;
    border: 0;
    background-color: ${({theme}) => theme.backgroundTwo || ''};
    color: ${({theme}) => theme.textColorOne};

`


/*
Seems like you can do this for inheritance:

export const BaseButton = styled.button`

    padding: 10px 25px;
    border: 0;
    background-color: ${({theme}) => theme.backgroundTwo || ''};
    color: ${({theme}) => theme.textColorOne};

`

export const ExtendedButton = styled(BaseButton)`

    ...more styles

`

-Will, 07/16/2022 3:56AM
*/
