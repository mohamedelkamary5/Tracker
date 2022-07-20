import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ShowAdd } from '../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () => {
    dispatch(ShowAdd(true))
  }
  const {t} = useTranslation()
  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span> {t("btnAddRestaurants")}</span>
      </button>
    </div>
  )
}



export default AddClint