import React from 'react';

import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

import { getPathByLabel } from '../../data/routes';

const Industrial = () => {
    return (
        <div>

            {/* <h1>Industrial Endpoint</h1> */}

            <div className='padding-vertical-0'> </div>

            <div className="alinearEnColumna">
                <Button to={getPathByLabel('servicios')} className={"button button-Servicios-Volver"}>
                    Volver a servicios
                </Button>
            </div>

            <h1>Industrial Endpoint</h1>

            <p>This is a placeholder for the Industrial screen.</p>
        </div>
    );
};

export default Industrial;