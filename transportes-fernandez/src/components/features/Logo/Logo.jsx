import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets_prod/Logo.png';
import './Logo.css';

const Logo = ({ className }) => {
    return (
        <Link to="/">
            <img
                className={`logo ${className || ''}`} // Aplica la clase adicional si se proporciona
                src={logo}
                alt="Logo de la empresa"
                style={{ cursor: 'pointer' }}
            />
        </Link>
    );
};

export default Logo;