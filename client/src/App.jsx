
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>

  );
}

export default App;