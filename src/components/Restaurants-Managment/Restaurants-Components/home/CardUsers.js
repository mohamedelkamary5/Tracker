import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import "../../../../styles/Components/_card-users.scss"
import go from "../../../../photo/glopal/go-to.svg"
import personLogin from "../../../../photo/slogan/personlogin.jpg"
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../../store/Restaurants-Managment/OrdersRestauantsSlice';
import { Link } from 'react-router-dom';
const CardUsers = () => {
  const dispatch = useDispatch()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const domydata = [
    {
      id: 1,
      typeOrder: "طلب جديد",
      dateOrder: "30/3/2022",
      timeOrder: "2:00pm",
      pickupPoint: "30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint: "81 شارع المدينة - أستاذ احمد",
      photoDriver: personLogin,
      nameDriver: "جاسم فيصل"
    },
    {
      id: 2,
      typeOrder: "طلب مرفوض",
      dateOrder: "30/3/2022",
      timeOrder: "2:00pm",
      pickupPoint: "30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint: "81 شارع المدينة - أستاذ احمد",
      photoDriver: personLogin,
      nameDriver: "جاسم فيصل"
    },
    {
      id: 3,

      typeOrder: "تم التوصيل",
      dateOrder: "30/3/2022",
      timeOrder: "2:00pm",
      pickupPoint: "30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint: "81 شارع المدينة - أستاذ احمد",
      photoDriver: personLogin,
      nameDriver: "جاسم فيصل"
    },
    {
      id: 4,
      typeOrder: "قيد التوصيل",
      dateOrder: "30/3/2022",
      timeOrder: "2:00pm",
      pickupPoint: "30 شارع ااميثاق - مطعم الاصدقاء",
      deliveryPoint: "81 شارع المدينة - أستاذ احمد",
      photoDriver: personLogin,
      nameDriver: "جاسم فيصل"
    }
  ]



  useEffect(() => {
    dispatch(getOrders(1))
  }, [dispatch])

  const orderList = useSelector(state => state.ordersRestauantsSlice.orders)


  const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }


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
            <Link to='/orders'>عرض التفاصيل</Link>
          </div>

        </div>
      </div>
      {/*Cards Slider */}
      <div className='cards' >

        <Carousel breakPoints={breakPoints} enableAutoPlay={false} isRTL={true} outerSpacing={20} >
          {orderList.map(item => {
            return (

              <div className='items-cards' key={item.id}>
                <div className={
                  item.status === "pending" ? 'header-item py-2 black' :
                    item.status === "طلب مرفوض" ? 'header-item py-2 red' :
                      item.status === "done" ? 'header-item py-2 green' : "header-item py-2 yallow"

                }>
                  <h4>{item.status == 'pending' ? 'طلب جديد' :'' }</h4>
                  <div className='date-order'>
                    <p>{new Date(item.updated_at).toISOString().slice(0, 11).replace('T', ' ')}</p>
                    <p className='tiem'>
                      {tConvert(new Date(item.updated_at).toISOString().slice(11, 19).replace('T', ' '))}
                    </p>

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
                        <p>{item.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className='fotter-item'>
                    {item.status === "pending" ?
                      <>
                        <div className='right-fotter'>
                          <p>لم يتم تعيين سائق بعد</p>
                        </div>
                        <div className='left-fotter'>
                          <button className='btn btn-main'>تعيين سائق</button>
                        </div>
                      </>
                      : <>
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
                          <button className='btn btn-dark'>عرض الحساب</button>
                        </div>
                      </>
                    }
                  </div>


                </div>


              </div>

            )
          })
          }
        </Carousel>
        {/* <Carousel breakPoints={breakPoints} enableAutoPlay={false} isRTL={false} outerSpacing={20} >
          {domydata.map(item => {
            return (

              <div className='items-cards'>
                <div className={
                  item.status === "طلب جديد" ? 'header-item black' :
                    item.status === "طلب مرفوض" ? 'header-item red' :
                      item.status === "pending" ? 'header-item green' : "header-item yallow"

                }>
                  <h4>{item.status}</h4>
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
        </Carousel> */}

      </div>
    </div>
  )
}

export default CardUsers