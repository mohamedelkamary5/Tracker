import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BtnActiveList = () => {
  const {t} = useTranslation()

  return (
    <button className='btn btn-outline btn-outline-dark'>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
        <Link to="/admin/drivers/active-drivers"><span>{t("btnActiveDrivers")}</span></Link>
    </button>
  )
}
export default BtnActiveList