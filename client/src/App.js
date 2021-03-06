// import native react modules
import React, { useState } from 'react';
import { ThemeSelectionProvider } from './providers/ThemeSelectionProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";
import GlobalStyle from './components/styles/GlobalStyle.style';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";


// import page components
import {
  LandingPage,
  UserHomePage,
  EventPage,
  LandingPageIntro,
  TestPage,
} from "./pages";
import auth from './utils/auth';
import { Nav } from 'react-bootstrap';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/*
  changed react-scripts from 5.0.1 to 4.0.3 to solve
  weird proxy issue

  if we need to revert back to 5.0.1, use this code:
*/
const isProduction = process.env.NODE_ENV === 'production' 


const httpLink = createHttpLink({
  uri: isProduction
    ? '/graphql'
    : 'http://localhost:3001/graphql'
});

console.log('is production: ', isProduction);

// use this proxy link for react-scripts 4.0.3
// const httpLink = createHttpLink({
//   uri: '/graphql'
// });
//



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  console.log(process.env);
  return (
    <ApolloProvider client={client}>
      <ThemeSelectionProvider>
        {/* use global css styles */}
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPageIntro/>}/>
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/user-home" element={<UserHomePage/>}/>
          <Route path="/event/:id" element={<EventPage/>}/>
          <Route path="/redirect" element={<Navigate to="/home"/>}/>
          <Route path="/dev" element={<TestPage/>}/>
        </Routes>
      </ThemeSelectionProvider>
    </ApolloProvider>
  );
}

export default App;
