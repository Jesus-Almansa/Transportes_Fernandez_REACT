import React from 'react';
import PropTypes from 'prop-types';
import './BoxList.css';

const BoxList = ({ title, children }) => {
    return (
        <div className="boxList">
            {title && <h2 className="box-title">{title}</h2>}
            <div className="box-content">
                {children}
            </div>
        </div>
    );
};

BoxList.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default BoxList;
