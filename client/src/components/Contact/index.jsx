import React from 'react';
import { FaFacebook, FaYelp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <a href="https://www.facebook.com/yourbusiness" target="_blank" rel="noreferrer">
                <FaFacebook size={40} />
            </a>
            <a href="https://www.yelp.com/biz/yourbusiness" target="_blank" rel="noreferrer">
                <FaYelp size={40} />
            </a>
        </div>
    );
};

export default Contact;