import React from 'react';
import { Detector } from 'react-detect-offline'
const CheckConnection = (props) => {
    return (
            <Detector
                render={({ online }) => (
                    online ? props.children : <h1>No CheckConnection</h1>
                )}
            />
    );
}

export default CheckConnection;
