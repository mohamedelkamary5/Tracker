import React from 'react'
import styled from "styled-components"
import alert from "../../photo/icons/alert.svg"
import Customer from "../../photo/icons/customerswedget.svg"
import requests from "../../photo/icons/requestswedget.svg"
import delevery from "../../photo/icons/deleverywedget.svg"
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'


const Widgets = () => {
    const UserData = useSelector((state) => state.clients2)
    const UserDataDrivers = useSelector(state => state.drivers)
    const counterCustomer = UserData.meta.total
    const counterDrivers = UserDataDrivers.meta.total
    const { t } = useTranslation();
    return (
        <StyleWedget>
            <StyleItemWedgetAlert>
                <div>
                    <img src={alert}></img>
                    <h4>{t("wedget-alert")}</h4>
                </div>
                <span>2</span>
            </StyleItemWedgetAlert>
            <StyleItemWedgetAbout>
                <WedgetAboutRight>
                    <img src={Customer}></img>
                    <p>{t("NumRestaurants")}</p>
                    <h3>{counterCustomer}</h3>
                </WedgetAboutRight>
                <WedgetAboutLeft>
                    <BsThreeDotsVertical className='BsThreeDotsVertical' />
                    <p>{t("increase")} %23<AiOutlineArrowUp className='AiOutlineArrowUp' /></p>
                </WedgetAboutLeft>
            </StyleItemWedgetAbout>
            <StyleItemWedgetAbout>
                <WedgetAboutRight>
                    <img src={requests}></img>
                    <p>{t("NumOrders")}</p>
                    <h3>450</h3>
                </WedgetAboutRight>
                <WedgetAboutLeft>
                    <BsThreeDotsVertical className='BsThreeDotsVertical' />
                    <p>{t("increase")} %35<AiOutlineArrowUp className='AiOutlineArrowUp' /></p>
                </WedgetAboutLeft>
            </StyleItemWedgetAbout>
            <StyleItemWedgetAbout>
                <WedgetAboutRight>
                    <img src={delevery}></img>
                    <p>{t("NumDrivers")}</p>
                    <h3>{counterDrivers}</h3>
                </WedgetAboutRight>
                <WedgetAboutLeft>
                    <BsThreeDotsVertical className='BsThreeDotsVertical' />
                    <p>{t("increase")} %10<AiOutlineArrowUp className='AiOutlineArrowUp' /></p>
                </WedgetAboutLeft>
            </StyleItemWedgetAbout>
        </StyleWedget>
    )
}

//style Wedget
const StyleWedget = styled.div`
margin-top: 9px;
width: 25%;
@media (max-width:910px) {
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap:0 10px ;
  width:100% ;
}
@media (max-width:760px) {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100% ;
  margin-top: 15px;
}
`
const StyleItemWedgetAlert = styled.div`
position: relative;
background-color: white;
display: flex;
justify-content: flex-end;
align-items: center;
border-radius: 10px;
margin: 10px 0;
div{
    padding: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
h4{
    margin-right: 40px;
    font-size: 20px;
}
span{
    padding: 0px 9px;
    border-radius:50% ;
    color: white;
    background-color: var(--danger-color);
    position: absolute;
    top: -4px;
    margin: -8px;
}


`
const StyleItemWedgetAbout = styled.div`
background-color: white;
padding: 7px 35px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;
margin: 22px 0;
height: 26%;
`

const WedgetAboutRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    padding-bottom: 20px;
}
p{
    font-size: 14px;
    color: var(--font);
    font-weight: bold;
}
h2{
    line-height: 30px;
}

`
const WedgetAboutLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
.BsThreeDotsVertical{
    font-size: 25px;
    margin-bottom: 30px ;
    cursor: pointer;
}
p{
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: var(--succes-color);
}

`



export default Widgets
