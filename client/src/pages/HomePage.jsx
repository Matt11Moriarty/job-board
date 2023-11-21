import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Jobs from '../components/JobList';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <h1>Featured Jobs</h1>
            <Jobs />
        </div>
    );
}

export default HomePage;