import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import AddManager from '../components/Managers/AddManager'
import TabelManagers from '../components/Managers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'
import { useTranslation } from "react-i18next";

const Managers = ({HandelShow }) => {
  const [searchSort , setSortSearch] = useState("") 
    //translate
    const { t , i18n } = useTranslation();
    
  return (
    <div className='lay-out-wrapp'>
    <TopBar title={t("managers")} HandelShow={HandelShow} />
    <div className='style-flex-page'>
        <TabelManagers searchSort={searchSort} setSortSearch={setSortSearch} />
        
       
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
export default Managers