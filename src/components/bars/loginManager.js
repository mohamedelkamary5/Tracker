import React from 'react'
import styled from "styled-components"
import personlogin from "../../photo/slogan/personlogin.jpg"
import Notifications from './Notifications'
const loginManager = () => {
  return (
    <StyleloginManager>
        <StyleRightloginManager>
        <img src={personlogin} />
        <span>مرحبا, سالم</span>
        </StyleRightloginManager>
        <StyleLeftloginManager>
        
        
        </StyleLeftloginManager>
    </StyleloginManager>
  )
}
const StyleloginManager= styled.div`
background-color: white;
padding: 8px 10px;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin: 0 20px;
@media (max-width:460px) {
    margin: 10px 0;
    width: 260px;
}

`
const StyleRightloginManager= styled.div`
display: flex;
align-items: center;
svg{
  padding: 10px;
}
img{
    width: 35px;
    height: 35px;
    border-radius:50% ;
    border:2px solid var(--primary-color);
    margin: 0 10px;
}

`
const StyleLeftloginManager= styled.div`


`
export default loginManager