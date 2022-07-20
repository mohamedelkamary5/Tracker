import React from 'react'
import { useTranslation } from 'react-i18next';
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const BlackList = () => {
  const {t} = useTranslation()
  return (
    <button className='btn btn-outline btn-outline-dark'>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
        <Link to="/admin/currencies/black-list"><span>{t("btnBlackList")}</span></Link>
    </button>
  )
}
export default BlackList