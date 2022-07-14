import React from 'react'
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddOrder } from '../../../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const handleAddOrder = () => {
    dispatch(AddOrder(true))
  }
  return (
    <div >
      <button className='btn btn-main' onClick={handleAddOrder} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span> إضافة طلب </span>
      </button>
    </div>
  )
}



export default AddClint