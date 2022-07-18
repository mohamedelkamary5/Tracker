import React from 'react';
import { Detector } from 'react-detect-offline'
import NoConnection from './NoConnection';
const CheckConnection = (props) => {
    return (
            <Detector
                render={({ online }) => (
                online ? props.children : <NoConnection />
                )}
            />
    );
}

export default CheckConnection;
