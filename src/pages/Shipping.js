import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelShipping from '../components/Shipping/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Shipping = ({HandelShow }) => {
    //translate
    const { t , i18n } = useTranslation();
  return (
    <div className='lay-out-wrapp'>
        <TopBar title={t("shipping")} HandelShow={HandelShow} />
        <div className='style-flex-page'>
            <TabelShipping />
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