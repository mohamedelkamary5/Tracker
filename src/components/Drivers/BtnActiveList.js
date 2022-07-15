import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const BtnActiveList = () => {
  return (
    <button className='btn btn-outline btn-outline-dark'>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
      <Link to="/admin/drivers/active-drivers"><span>السائقين النشطاء</span></Link>
    </button>
  )
}
export default BtnActiveList