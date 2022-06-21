
import React, { useState } from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
import TopBar from '../bars/TopBar'

import TabelBlackList from './TabelBlackList'
const DisActiveBlackList = () => {
  return (
    
        
        <div className='lay-out-wrapp'>
        <TopBar title={"القائمه السوداء"}  />
            <div className='style-flex-page'>
              <TabelBlackList />
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


export default DisActiveBlackList