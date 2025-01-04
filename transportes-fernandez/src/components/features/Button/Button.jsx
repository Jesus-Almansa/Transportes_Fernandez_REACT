import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ to, children, className }) => {
    return (
        <Link to={to} className={`button ${className}`}>
            {children}
        </Link>
    );
};

export default Button;