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
          id={clientDetails.id}
          user_id={clientDetails.user_id}
          en_desc={clientDetails. en_desc}
          ar_desce={clientDetails.ar_desc}
          sequence={clientDetails.sequence}
          cost={clientDetails.cost}
          months={clientDetails.months}
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