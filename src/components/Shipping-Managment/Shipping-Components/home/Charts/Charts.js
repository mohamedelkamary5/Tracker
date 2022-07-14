import React from 'react'
import OrderToday from './Components/OrderToday'
import DriversBusiness from './Components/DriversBusiness'
import ViewOrdres from './Components/ViewOrdres'

export default function Charts() {
    return (
        <div className='row'>
            <div className='col-lg-4'>
                <OrderToday />
                <DriversBusiness />
            </div>
            <div className='col-lg-8'>
                <ViewOrdres />
            </div>
        </div>
    )
}
