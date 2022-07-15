

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TestComponent, ListItem, ListFrame } from '../../components/styles/TestComponent.style';

const theme = {
    background: 'blue',
}

const TestPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <TestComponent>
                    test
                    <ListFrame>
                        <ListItem>Something 1</ListItem>
                        <ListItem>Something 2</ListItem>
                        <ListItem>Something 3</ListItem>
                    </ListFrame>
                </TestComponent>
            </div>   
        </ThemeProvider>
    );
}

export default TestPage;

