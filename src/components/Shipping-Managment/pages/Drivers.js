import React, { useState } from 'react'
import styled from "styled-components"
import TableAllUsers from '../Restaurants-Components/Drivers/TabelAllUsers'
import TopBar from '../Restaurants-Components/bars/TopBar'




const Drivers = ({ HandelShow, HandelShowCustomer }) => {
  const [searchSort, setSortSearch] = useState("")
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={"السائقين"} HandelShow={HandelShow} />
      <div className='style-flex-page'>
        
    <TableAllUsers/>
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