import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const BlackList = () => {
  return (
    <button className='btn btn-outline btn-outline-dark'>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
      <Link to="/admin/quotes/black-list"><span>القائمه السوداء</span></Link>
    </button>
  )
}
export default BlackList