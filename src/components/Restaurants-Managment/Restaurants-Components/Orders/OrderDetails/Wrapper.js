import React from 'react'
import styled from "styled-components"
import TopBar from '../../bars/TopBar'


const WrapperContainer = ({ children, HandelShow }) => {
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={"حسابي"} HandelShow={HandelShow} />


      <div className='style-flex-page'>
        {children}

      </div>

    </div>

  )
}

const StyleFlex = styled.div`


margin-top: 33px;
width: 100%;
border: 1px solid var(--background-opacity);
border-radius: 40px;
@media (max-width:910px) {
 
}
`
export default WrapperContainer