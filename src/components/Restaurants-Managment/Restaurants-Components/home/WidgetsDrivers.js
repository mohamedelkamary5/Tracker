import React ,{useState} from 'react'
import "../../../../styles/Components/_widgets-divers.scss"
import { BiUpArrow } from 'react-icons/bi';

const WidgetsDrivers = () => {


  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
  <path id="Polygon_4" data-name="Polygon 4" d="M6,0l6,11H0Z" fill="#fff"/>
  </svg>

    const domydata = [
        {
          id:1,
          iserid:"10",
          nameDriver:"جاسم فيصل",
          state:"متاح" 
          
        },
        {
          id:2,
          iserid:"4",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
          id:3,
          iserid:"8",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"9",
          nameDriver:"جاسم فيصل",
          state:"متاح" 
          
        },
        {
          id:1,
          iserid:"3",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"7",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
          id:1,
          iserid:"1",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"2",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
            id:1,
            iserid:"5",
            nameDriver:"جاسم فيصل",
            state:"غير متاح" 
            
          },
          {
            id:1,
            iserid:"6",
            nameDriver:"جاسم فيصل",
            state:"غير متاح" 
            
          },
           
       
      ]
      const [resultData, setResultData] = useState(domydata)
      const [sortValue, setSortValue] = useState('')
      const sortingItems = [
        { id: 2, name: 'nameDriver', title: 'الأسم' },
        { id: 1, name: 'iserid', title: 'الرقم' },
        { id: 3, name: 'state', title: 'الحاله' },
    
    ]
    const handleSort = (name) =>{
      setResultData([...resultData].sort((a, b) => a[name] > b[name] ? 1 : -1))
      setSortValue(name)
    }
  return (
    <div className='main-widget-drivers'>
        <table>
        <thead>
        <tr>
          {sortingItems.map((item =>{
            return (
               <>
                  <th onClick={() => handleSort(item.name)} >{item.title}{arrow}</th>
               </>
            )
          }))}
           </tr>
           </thead>

            <tbody>
                <>
                    {resultData.map(item =>{
                        return (
                            <tr>
                                <td>{item.nameDriver}</td>
                                <td>{item.iserid}</td>
                                <td className={item.state==="متاح" ? "success" : item.state==="غير متاح" ? "danger" : "orange"}>{item.state}</td>
                            </tr>
                        )
                    })}
                </>
            </tbody>
        </table>
        <div className='button-details'>
            <button>اظهار التفاصيل</button>
            
        </div>
    </div>
  )
}

export default WidgetsDrivers