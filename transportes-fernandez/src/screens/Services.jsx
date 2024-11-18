import React from 'react';
import BoxList from '../components/layout/Box/BoxList';
import MediaVideo from '../components/features/MediaVideo/MediaVideo.jsx';
import zeldaVideo from '../assets/video/zelda.mp4';
import OIAI from '../assets/video/OIAI.mp4';

const Services = () => {
    return (
        <div>
            <BoxList title="Servicios">
                <ul>
                    <li>Regional</li>
                    <li>Nacional</li>
                    <li>Internacional</li>
                    <li>Espacial</li>
                </ul>
            </BoxList>

            <MediaVideo content={zeldaVideo} /> 
            <MediaVideo content="https://www.youtube.com/watch?v=olKjeHdOW3Y" />
            <MediaVideo content={OIAI} />
        </div>
    );
};

export default Services;
