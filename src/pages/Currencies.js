import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelCurrency from '../components/Currency/TabelAllUsers'
import { MarginPages } from '../styles/MarginPages'

const Currencies = ({ HandelShow }) => {
  const [searchSort, setSortSearch] = useState("")
  //translate
  const { t , i18n } = useTranslation();
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={t("currencies")} HandelShow={HandelShow} />
      <div className='style-flex-page'>
        <TabelCurrency searchSort={searchSort} setSortSearch={setSortSearch} />

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


export default Currencies