import React from 'react';
import PropTypes from 'prop-types';

import './MediaPicture.css';

const MediaPicture = ({ src, alt, className }) => {
    // Verificar si src ya contiene una extensión (como ocurre con importaciones)
    const hasExtension = /\.\w+$/.test(src);

    return (
        <picture className={className}>
            {!hasExtension && <source srcSet={`${src}.webp`} type="image/webp" />}
            {!hasExtension && <source srcSet={`${src}.jpg`} type="image/jpg" />}
            {!hasExtension && <source srcSet={`${src}.png`} type="image/png" />}
            <img src={src} alt={alt} />
        </picture>
    );
};

MediaPicture.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default MediaPicture;