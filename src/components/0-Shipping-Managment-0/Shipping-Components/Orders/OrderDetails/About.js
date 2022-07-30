import React from 'react'
import styled from "styled-components"
import { AiFillStar } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import delevery from '../../../../../photo/icons/deleverywedget.svg'
const AboutClint = ({ clientDetails, id, mobile }) => {

  console.log('clientDetails', clientDetails);
  return (
    <MainStyleAbout key={id}>
      <MainRightAbout>
       
        <div className='apout'>
          <h5>  اسم العميل : {clientDetails.client_name}</h5>
          <p>
            رقم الموبايل :
            <a className='text-link' href={`tel:+${clientDetails.mobile}`}>
              {mobile}
            </a>
          </p>
          <h5> السعر : {clientDetails.price}</h5>
          <h5> العنوان : {clientDetails.address}</h5>

        </div>
      </MainRightAbout>
      <MainLiftAbout>
        <div className='item-wedget'>
          <div className='header-wedget'>
            <AiFillStar className='icon-wedget' />
            <p>حالة الطلب</p>
          </div>
          <div className='type'>
            <h2 className='text-white'>{clientDetails.status == 'pending' ? 'قيد الإنتظار' : 'قيد التوصيل'}</h2>
          </div>
        </div>
        <div className='item-wedget price'>
          <div className='header-wedget'>
            <BsCurrencyDollar className='icon-wedget' />
            <p>سعر الطلب</p>
          </div>
          <div className='type mt-3'>
            <h4>{clientDetails.price}</h4>
          </div>
        </div>
        <div className='item-wedget'>
          <div className='header-wedget'>
            <img src={delevery} />
            <p>العنوان</p>
          </div>
          <div className='type'>
            <p className='text-dark'>{clientDetails.address}</p>
          </div>
        </div>

      </MainLiftAbout>
    </MainStyleAbout>
  )
}
const MainStyleAbout = styled.div` 
display: flex;
justify-content: space-between;
padding: 30px;
border-bottom:1px solid var(--font-opacity) ;
@media (max-width:688px ) {
    flex-direction: column;
  }
`
const MainRightAbout = styled.div`
display: flex;
align-items: center;
@media (max-width:688px ) {
    justify-content: space-between;
  }
.photo-logo{
  img{
    width: 160px;
    @media (max-width:688px ) {
    width: 110px;
  }
  }

}
.apout{
  margin-right: 15px ;
  p ,h5 {
    padding: 4px 0;
    color: var(--font);
  }
  h5{
    font-size: 17px;
  }

  @media (max-width:550px ) {
    p {
      font-size: 14px;
    }
  }
  button{
    all: unset;
    border: 1px solid var(--font-opacity);
    border-radius: 7px;
    padding: 4px 12px;
    margin-top: 6px;
    color: var(--font);  
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  
}
`
const MainLiftAbout = styled.div`
display: flex;
align-items: center;
  @media (max-width:1000px ) {
   flex-direction: column;
  }
  @media (max-width:550px ) {
    width: 100%;
    margin: 30px 0;
  }
.item-wedget{
  margin: 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 250px;
  height: 150px;
  display: flex;
    align-items: center;
    justify-content: space-between;
  .icon-wedget , img, svg{
    margin-left: 18px;
    &:lang(en){
      margin-left: 0px;
      margin-right: 10px;
    }
  }
  &.price{
    svg{
      font-size: 38px;
      outline: 10px solid #faa30d1f;
      border-radius: 50%;
      margin-left: 18px;
      color: #FBA30D;
      background-color: #faa30d1f;
    }
  }
  
  h2{
    font-size: 27px;
    
  }
  @media (max-width:1486px ) {
    width: 170px;
  }
  @media (max-width:1000px ) {
    width: 250px;
  }
  @media (max-width:550px ) {
    width: 100%;
    
  }
  :first-child{
    background-color: var(--secound-color);
    color: white;
    .icon-wedget{
      font-size: 50px;
      background-color: #ffffff24 ;
      border-radius: 50%;
      padding: 10px;
    }
  }
  :last-child , :nth-child(2) {
    background-color: white;
    p{
    color: var(--primary-color);
  }
  }
  .header-wedget{
    display: flex;
    align-items: center;
  }

  
}
`
export default AboutClint