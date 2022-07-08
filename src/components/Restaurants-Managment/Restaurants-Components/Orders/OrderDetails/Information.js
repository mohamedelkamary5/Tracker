import React, { useState } from 'react';
import AboutClint from './About';
import TrackingGoogleMapComponet from '../../../../../Shared/Components/Google-Map-Container/Tracking-Google-Map/TrackingMap';

const ClintInformation = ({ clientDetails }) => {

  console.log('clientDetails', clientDetails);

  return (
    <div className='w-100'>
      <div key={clientDetails.idUser} >
        <AboutClint
          clientDetails={clientDetails}
          id={clientDetails.user_id}
          logo={clientDetails.photo}
          idUser={clientDetails.user_id}
          ar_name={clientDetails.ar_name}
          en_name={clientDetails.en_name}
          mobile={clientDetails.mobile}
          telephone={clientDetails.telephone}
        />

        <TrackingGoogleMapComponet address={clientDetails} />

      </div>

    </div>
  )
}



export default ClintInformation