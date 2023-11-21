import React from 'react';
import Header from '../components/Header/index.jsx';
import Hero from '../components/Hero/index.jsx';
import Jobs from '../components/JobList/index.jsx';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Jobs />
        </div>
    );
};

export default HomePage;