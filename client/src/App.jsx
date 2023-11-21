import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main>
      <ApolloProvider client={client}>
      <Header isLoggedIn={isLoggedIn}/>
      <Outlet />
      <Footer />
      </ApolloProvider>
    </main>
  );
}

export default App;