import React from 'react';
import styled from "styled-components";
import AboutClint from './About';
import HeaderButton from './HeaderButton';
import TabelClient from './TabelUser';

const ClintInformation = ({  clientDetails }) => {

  return (
    <MainStyleClint>

      <ItemStyleClint key={clientDetails.idUser} >

        <HeaderButton
          id={clientDetails.id}
          status={clientDetails.status}
        />
        <AboutClint
          id={clientDetails.user_id}
          ar_title={clientDetails.ar_title}
          en_title={clientDetails.en_title}
          drivers_count={clientDetails.drivers_count}

        />
        <TabelClient
          logo={clientDetails.photo}
          id={clientDetails.id}
          name={clientDetails.en_name}
          idUser={clientDetails.user_id}
          number={clientDetails.mobile}
          telephone={clientDetails.telephone}
          state={clientDetails.status}
          clintemail={clientDetails.email}
          websitelink={clientDetails.address}
          tradetype={clientDetails.email}
          currencypaid={clientDetails.status}
        />



      </ItemStyleClint>





    </MainStyleClint>
  )
}
const MainStyleClint = styled.div`
width: 100%;

`
const ItemStyleClint = styled.div`
`

export default ClintInformation