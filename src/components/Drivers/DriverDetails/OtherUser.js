import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const OtherClint = (props) => {
const {clintemail , websitelink  ,currencypaid  } = props
const { t } = useTranslation();

  return (
    <MainStyleOther>
     <div className='item-wedget'>
        <div className='header-wedget'>
          <AiOutlineMail className='icon-wedget' />
          <p>{t("emailClint")}</p>
        </div>
        <div className='type'>
          <h6>{clintemail}</h6>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsLink className='icon-wedget' />
          <p>{t("addressClint")}</p>
        </div>
        <div className='type'>
          <h6><Link to={`${websitelink}`} target="_blank" >{websitelink}</Link></h6>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>{t("CurrencyPaid")}</p>
        </div>
        <div className='type'>
          <h6>{currencypaid}</h6>
        </div>
      </div>
    </MainStyleOther>
  )
}
const MainStyleOther = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
.item-wedget{
  margin: 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 280px;
  background-color: white;
  .icon-wedget {
    margin-left: 18px;
    &:lang(en){
      margin-left: 0px;
      margin-right: 10px;
    }
  }
  p{
    color: var(--primary-color);
  }
  h6 {
    font-weight: bold;
      a{color: black}
  }
  .icon-wedget{
      font-size: 50px;
      background-color: #ffa5001a  ;
      border-radius: 50%;
      padding: 10px;
      color: var(--primary-color);
    }
}
.header-wedget{
    display: flex;
    align-items: center;
  }

`
export default OtherClint