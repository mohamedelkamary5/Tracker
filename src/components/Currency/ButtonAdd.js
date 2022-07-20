import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddCurrency } from '../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () =>{
        dispatch(AddCurrency(true))
      }
  const {t} = useTranslation()

  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span>{t("btnAddCurrency")}</span>
      </button>
    </div>
  )
}



export default AddClint