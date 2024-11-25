import React from 'react';
import BoxList from '../components/layout/Box/BoxList';
import MediaVideo from '../components/features/MediaVideo/MediaVideo.jsx';
import MediaPicture from '../components/features/MediaPicture/MediaPicture.jsx';

import regionalImage from '../assets/images/regional copy.png';
import CiutatVella from '../assets/images/nacional.jpg';
import zeldaVideo from '../assets/video/zelda.mp4';
import OIAI from '../assets/video/OIAI.mp4';

const Services = () => {
    return (
        <div>
            <MediaPicture src={CiutatVella} alt="placeholder" />
            {/* <MediaPicture src={regionalImage} alt="placeholder" /> */}
            <BoxList title="Servicios">
                <ul>
                    <li>Regional</li>
                    <li>Nacional</li>
                    <li>Internacional</li>
                    <li>Espacial</li>
                </ul>
            </BoxList>

            <div className='alinearEnColumna'>
                <h1>Regional</h1>
                <div className='enLinea'>
                    <div className='izquierda'>
                        <MediaPicture src={regionalImage} alt="placeholder" />
                    </div>

                </div>
            </div>


            <MediaVideo content={zeldaVideo} />
            <br />
            <MediaVideo content="https://www.youtube.com/watch?v=olKjeHdOW3Y" />
            <br />
            <MediaVideo content={OIAI} />
            <br />
        </div>
    );
};

export default Services;
