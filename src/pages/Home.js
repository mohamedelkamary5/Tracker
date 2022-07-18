import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelUsers from '../components/home/TabelUsers'
import Widgets from '../components/home/Widgets'
import { useTranslation } from "react-i18next";


const Home = ({ HandelShow }) => {
  const { t } = useTranslation();

  return (
    <div className='lay-out-wrapp'>
      <TopBar title={t("home")} HandelShow={HandelShow} />
      <div className='style-flex-page'>

        <TabelUsers />
        <Widgets />
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
export default Home