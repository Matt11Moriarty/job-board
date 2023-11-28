import React from 'react';
import './HomeAbout.css';
import Image from '../../assets/images/teamwork.jpg'; 

const About = () => {
    return (
        <section id="about">
            <h2>About Our Platform</h2>
            <img src={Image} alt="teamwork" />
            <p>
                Welcome to our job board web application, a dedicated platform designed for businesses to manage their job postings with ease. As a business, you can post job vacancies, manage applications, access candidate profiles, and schedule interviews seamlessly.
            </p>
            <p>
                For candidates, this platform serves as a comprehensive job search tool. View all available jobs, get detailed information about each role, and apply directly through our platform. Start your job search with us and find your perfect role.
            </p>
        </section>
    );
};

export default About;