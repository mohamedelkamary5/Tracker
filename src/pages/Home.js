import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelUsers from '../components/home/TabelUsers'
import Widgets from '../components/home/Widgets'
import { MarginPages } from '../styles/MarginPages'

const Home = ({ HandelShow }) => {


  return (
    <div className='lay-out-wrapp'>
      <TopBar title="الرئيسية" HandelShow={HandelShow} />
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