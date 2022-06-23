import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import "../../../../styles/Components/_card-users.scss"
import go from "../../../../photo/glopal/go-to.svg"
import personLogin from "../../../../photo/slogan/personlogin.jpg"
import Carousel from 'react-elastic-carousel';


const CardUsers = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const domydata = [
    {
      id:1,
      typeOrder : "طلب جديد",
      dateOrder : "30/3/2022",
      timeOrder : "2:00pm",
      pickupPoint:"30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint:"81 شارع المدينة - أستاذ احمد",
      photoDriver:personLogin,
      nameDriver:"جاسم فيصل"
    },
    {
      id:2,
      typeOrder : "طلب مرفوض",
      dateOrder : "30/3/2022",
      timeOrder : "2:00pm",
      pickupPoint:"30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint:"81 شارع المدينة - أستاذ احمد",
      photoDriver:personLogin,
      nameDriver:"جاسم فيصل"
    },
    {
      id:3,

      typeOrder : "تم التوصيل",
      dateOrder : "30/3/2022",
      timeOrder : "2:00pm",
      pickupPoint:"30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint:"81 شارع المدينة - أستاذ احمد",
      photoDriver:personLogin,
      nameDriver:"جاسم فيصل"
    },
    {
      id:4,
      typeOrder : "قيد التوصيل",
      dateOrder : "30/3/2022",
      timeOrder : "2:00pm",
      pickupPoint:"30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint:"81 شارع المدينة - أستاذ احمد",
      photoDriver:personLogin,
      nameDriver:"جاسم فيصل"
    }
  ]

  



    return (
     
      <div className='main-card-users'>
        <div className='header-cards'>
          <div className='right-header'>
            <h5>توصيلات اليوم</h5>
          </div>
          <div className='left-header'>
            <div className='date-header'>
              <select>
                <option>اليوم</option>
                <option>الاسبوع</option>
                <option>الشهر</option>
                <option>السنه</option>
              </select>

            </div>
            <div className='button-details'>
              <a href='#'>عرض التفاصيل</a>
            </div>

          </div>
        </div>
        {/*Cards Slider */}
        <div className='cards' >
        <Carousel breakPoints={breakPoints} >
        {domydata.map(item =>{
          return (

            <div className='items-cards'>
            <div className={
            item.typeOrder ==="طلب جديد" ?'header-item black' : 
            item.typeOrder ==="طلب مرفوض" ?'header-item red' :
            item.typeOrder ==="تم التوصيل" ?'header-item green' :"header-item yallow"
            
             }>
              <h4>{item.typeOrder}</h4>
               <div className='date-order'>
                <p>{item.dateOrder}</p>
                <p>{item.timeOrder}</p>

               </div>
            </div>
            <div className='body-item'>
              <div className='img-go'>
                <img src={go} alt="go-to" />
                <div>
              <div className='pickup-point'>
                <h5>نقطه الالتقاط</h5>
                <p>30 شارع ااميثاق - مطعم الاصدقاء</p>
      
              </div>
              <div className='delivery-point'>
              <h5>نقطه التوصيل</h5>
                <p>30 شارع ااميثاق - مطعم الاصدقاء</p>
            </div>
               </div>
            </div>
            <div className='fotter-item'>
              <div className='right-fotter'>
                <div className='img-driver'>
                  <img src={personLogin} alt="personLogin" />
                  <div className='about-driver'>
                    <p>السائق</p>
                    <h4>سالم سعيد</h4>
                    <h5>#15</h5>
                
                  </div>
                </div>

              </div>
              <div className='left-fotter'>
                <button>عرض الحساب</button>
              </div>
            </div>
            </div>


          </div>
          
          )
        })
        }
        </Carousel>
  
      </div>
      </div>
    )
}

export default CardUsers