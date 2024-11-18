import React from 'react';
import BoxList from '../components/layout/Box/BoxList';
import MediaBox from '../components/layout/Box/MediaBox';
import zeldaVideo from '../assets/video/zelda.mp4';
// import oiai from '../assets/video/oiai.mp4';

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

            <MediaBox content={zeldaVideo} /> 
            <MediaBox content="https://www.youtube.com/watch?v=olKjeHdOW3Y" />
            {/* <MediaBox content={oiai} /> */}
        </div>
    );
};

export default Services;
