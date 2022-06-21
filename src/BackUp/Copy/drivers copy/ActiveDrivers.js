
import React, { useState } from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
import TopBar from '../bars/TopBar'
import TabelActiveDrivers from './TabelActiveDrivers'
const ActiveDrivers = () => {
  return (
    
        
        <div className='lay-out-wrapp'>
        <TopBar title={"النشطاء"}  />
            <div className='style-flex-page'>
              <TabelActiveDrivers />  
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
export default ActiveDrivers