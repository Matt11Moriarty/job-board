import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default App;