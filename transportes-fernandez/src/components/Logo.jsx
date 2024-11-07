import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Logo de la empresa" style={{ cursor: 'pointer' }} />
        </Link>
    );
};

export default Logo;