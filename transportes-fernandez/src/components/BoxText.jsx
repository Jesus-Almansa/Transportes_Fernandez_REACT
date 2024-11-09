import React from 'react';
import PropTypes from 'prop-types';
import './BoxText.css';
import image from '../assets/images/truck.png';

const BoxText = ({ title, logo, children }) => {
    return (
        <div className="enLinea">

            <p className="boxText fondoRojo">
                <img src={image} alt={title} className="boxTextImage" />
                {children}
            </p>
        </div>
    );
};

BoxText.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    children: PropTypes.node
};

export default BoxText;