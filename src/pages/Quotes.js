import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelShipping from '../components/Quotes/TabelAllUsers'
import { MarginPages } from '../styles/MarginPages'
const Shipping = ({ HandelShow }) => {
  const [searchSort, setSortSearch] = useState("")
      //translate
      const { t , i18n } = useTranslation();
      
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={t("packages")} HandelShow={HandelShow} />
      <div className='style-flex-page'>
        <TabelShipping searchSort={searchSort} setSortSearch={setSortSearch} />

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
export default Shipping