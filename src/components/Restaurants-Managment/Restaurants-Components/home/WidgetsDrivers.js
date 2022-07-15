import React, { useState ,useEffect } from 'react'
import "../../../../styles/Components/_widgets-divers.scss"
import { getDrivers } from '../../../../store/Restaurants-Managment/DriverRestauantsSlice';
import { useSelector ,useDispatch } from 'react-redux';
const WidgetsDrivers = () => {


  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
    <path id="Polygon_4" data-name="Polygon 4" d="M6,0l6,11H0Z" fill="#fff" />
  </svg>
  const UserDataSelector = useSelector(state => state.driversRestaurant.driversRestaurant) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDrivers(1))
}, [dispatch])
console.log(UserDataSelector)


  const domydata = [
    {
      id: 1,
      iserid: 10,
      nameDriver: "جاسم فيصل",
      state: "متاح"

    },
    {
      id: 2,
      iserid: 4,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 3,
      iserid: 8,
      nameDriver: "جاسم فيصل",
      state: "مشغول"

    },
    {
      id: 1,
      iserid: 9,
      nameDriver: "جاسم فيصل",
      state: "متاح"

    },
    {
      id: 1,
      iserid: 3,
      nameDriver: "جاسم فيصل",
      state: "مشغول"

    },
    {
      id: 1,
      iserid: 7,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 1,
      nameDriver: "جاسم فيصل",
      state: "مشغول"

    },
    {
      id: 1,
      iserid: 2,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 5,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 6,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 2,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 5,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },
    {
      id: 1,
      iserid: 6,
      nameDriver: "جاسم فيصل",
      state: "غير متاح"

    },




  ]
  const [resultData, setResultData] = useState(UserDataSelector)
  const [sortValue, setSortValue] = useState('')
  const sortingItems = [
    { id: 2, name: 'en_name', title: 'الأسم' },
    { id: 1, name: 'id', title: 'الرقم' },
    { id: 3, name: 'isOnline', title: 'الحاله' },

  ]
  const handleSort = (name) => {
    setResultData([...resultData].sort((a, b) => a[name] > b[name] ? 1 : -1))
    setSortValue(name)
  }
  return (
    <div className='main-widget-drivers col-xs-12  col-xl-4 col-xxl-3   mg-20 '>
    <div className='widget'>
      <table>
     
        <thead>
         
          <tr>
            {sortingItems.map((item => {
              return (
                <>
                  <th onClick={() => handleSort(item.name)} >{item.title}{arrow}</th>
                </>
              )
            }))}
          </tr>
        </thead>

        <tbody>
          
            {resultData.map(item => {
              return (
                <tr>
                  <td>{item.en_name}</td>
                  <td>{item.id}</td>
                  <td className={item.isOnline === 1 ? "success" : item.isOnline === 0 ? "danger" : "orange"}>{item.isOnline === 0 ? "غير متصل" : "متصل"}</td>
                </tr>
              )
            })}
          
        </tbody>
        
      </table>
     </div>
      <div className='button-details'>
        <button>اظهار التفاصيل</button>

      </div>
    
    </div>
  )
}

export default WidgetsDrivers