import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddManager } from '../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () => {
    dispatch(AddManager(true))
  }
  const {t} = useTranslation()

  
  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span> {t("btnAddManagers")}</span>
      </button>
    </div>
  )
}



export default AddClint