import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Logo.css';
import image from '../../../assets/images/image.png';

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo"
            src={image} alt="Logo de la empresa" style={{ cursor: 'pointer' }} />
        </Link>
    );
};

export default Logo;