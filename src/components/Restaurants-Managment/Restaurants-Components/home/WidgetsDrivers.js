import React from 'react'
import "../../../../styles/Components/_widgets-divers.scss"
import { IoIosArrowUp } from 'react-icons/io';

const WidgetsDrivers = () => {
    const domydata = [
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"متاح" 
          
        },
        {
          id:2,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
          id:3,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"متاح" 
          
        },
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"مشغول" 
          
        },
        {
          id:1,
          iserid:"#ha164",
          nameDriver:"جاسم فيصل",
          state:"غير متاح" 
          
        },
        {
            id:1,
            iserid:"#ha164",
            nameDriver:"جاسم فيصل",
            state:"غير متاح" 
            
          },
          {
            id:1,
            iserid:"#ha164",
            nameDriver:"جاسم فيصل",
            state:"غير متاح" 
            
          },
           
       
      ]
  return (
    <div className='main-widget-drivers'>
        <table>
            <thead>
                <tr>
                    <th >الاسم<IoIosArrowUp /></th>
                    <th >الرقم<IoIosArrowUp /></th>
                    <th>الحاله<IoIosArrowUp /></th>
                  </tr>
            </thead>
            <tbody>
                <>
                    {domydata.map(item =>{
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