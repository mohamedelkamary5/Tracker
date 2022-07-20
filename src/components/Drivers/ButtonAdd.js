import React from 'react'
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddDriver } from '../../store/StateSlice';
import { useTranslation } from 'react-i18next';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () => {
    dispatch(AddDriver(true))
  }
  const {t} = useTranslation()

  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span>{t("btnAddDriver")}</span>
      </button>
    </div>
  )
}



export default AddClint