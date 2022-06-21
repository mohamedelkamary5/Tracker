import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import AddDrivers from '../components/drivers/AddDrivers'
import TabelDrivers from '../components/Drivers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Drivers = ({HandelShow ,HandelShowCustomer }) => {
  const [searchSort , setSortSearch] = useState("") 
  return (
    <div className='lay-out-wrapp'>
    <TopBar title={"السائقين"} HandelShow={HandelShow} />
    <div className='style-flex-page'>
        <TabelDrivers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer} />
        
    </div>
  </div>
  )
}
const StyleFlex = styled.div`
display: flex;
justify-content: space-between;

@media (max-width:910px) {
  flex-direction: column;
}
`
export default Drivers