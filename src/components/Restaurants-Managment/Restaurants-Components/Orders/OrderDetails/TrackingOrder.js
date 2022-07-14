import React, { useState, useEffect } from 'react';
import GoogleMapComponet from '../../../../../Shared/Components/Google-Map-Container/Google-Map/Map';
import GoogleMapComponetTracking from '../../../../../Shared/Components/Google-Map-Container/Google-Map/Map copy';
import TrackingMap from '../../../../../Shared/Components/Google-Map-Container/Tracking-Google-Map/TrackingMap';

const TrackingOrder = ({ address }) => {
  console.log('TrackingMap address', address);
  const handleMapInfo = (data) => {
    console.log('data', data);
    // setValues({ )
  }
  // const centerMap = {
  //   lat: address.lat,
  //   lng: address.lon
  // }

  const centerMap = {
    lat: address.lat,
    lon: address.lon
  };

  // useEffect(() => {
  //   setcenterMap({
  //     lat: address.lat,
  //     lon: address.lon
  //   })
  // }, [address]);

  // const centerMap1 = {
  //   lat: 30.78650859999999,
  //   lng: 31.0003757
  // }
  return (
    <div>
      {/* <TrackingMap address={address} /> */}
      {/* <GoogleMapComponet
        google={'this.props.google'}
        center={centerMap}
        height='300px'
        zoom={15}
        handleMapInfo={handleMapInfo}
      /> */}
      <GoogleMapComponetTracking
        google={'this.props.google'}
        center={address}
        height='60vh'
        zoom={14}
        handleMapInfo={handleMapInfo}
      />
    </div>
  );
}

export default TrackingOrder;
