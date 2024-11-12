import React from 'react';
import PropTypes from 'prop-types';
import './BoxList.css'; // Assuming you will create a CSS file for styling

const BoxList = ({ title, imageUrl, children }) => {
    return (
        <div className="box">
            {title && <h2 className="box-title">{title}</h2>} {/* Solo muestra si title está definido */}
            <ul className="boxList">
                {React.Children.map(children, (child, index) => (
                    <li key={index} className="box-list-item">
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    );
};

BoxList.propTypes = {
    title: PropTypes.string, // Ahora es opcional
    imageUrl: PropTypes.string,
    children: PropTypes.node
};

export default BoxList;
