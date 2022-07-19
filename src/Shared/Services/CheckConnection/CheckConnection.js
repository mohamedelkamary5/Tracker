import React from 'react';
import { Detector } from 'react-detect-offline'
import NoConnection from './NoConnection';
const CheckConnection = (props) => {
    return (
        <Detector
            render={({ online }) => (
                online ? null : <NoConnection />
            )}
        />
    );
}

export default CheckConnection;
