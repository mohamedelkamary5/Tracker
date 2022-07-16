import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { postFromData } from './../../../../../api/axios'
import swal from 'sweetalert';

const FormEdit = ({ dataMyAccount }) => {


  const ImgeHandeler = (e) => {
    const Reader = new FileReader()
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setValues({ ...values, photo: Reader.result })
      }
    }
    Reader.readAsDataURL(e.target.files[0])
  }

  const [values, setValues] = useState({
    id: dataMyAccount.id,
    email: dataMyAccount.email,
    name: dataMyAccount.name,
    photo: null,
  })

  const HandelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const valuesData = {}
    valuesData['id'] = values.id
    valuesData['email'] = values.email
    valuesData['name'] = values.name
    if (values.photo != null) {
      valuesData['photo'] = values.photo
    }


    postFromData('restaurants/profile/update', valuesData)
      .then((res) => {
        const userData = JSON.stringify({ user: res.data })
        localStorage.setItem('authDataRestaurant', userData)
        swal("تم تنفيذ الامر بنجاح", {
          icon: "success",
          button: 'موافق',
        });
      })
      .catch(err => {
        console.log('err', err)
        swal("عفوا لم يتم تنفيذ الامر", {
          icon: "error",
          button: 'موافق'
        });
      })


  }


  return (
    <div className='input-edit-account w-100'>
      <h2>تعديل البيانات</h2>
      <div className='edit-account-section'>

        <form>
          <div className='display-input' >
            <div className='input'>
              <label className='disabled'> #</label>
              <input className='disabled' disabled value={values.id} />
            </div>
            <div className='input'>
              <label className='disabled'> الايميل</label>
              <input className='disabled' disabled value={values.email} />
            </div>
            <div className='input'>
              <label>شعار  <span>*</span></label>
              <input type="file" onChange={ImgeHandeler} />
            </div>
            <div className='input'>
              <label>الاسم <span>*</span></label>
              <input type="text" name='name' value={values.name} onChange={HandelChange} />
            </div>

          </div>
          <div className='edit mb-3'>
            <button onClick={handelSubmit} className='btn btn-dark' > <span>تعديل</span> <FaUserEdit /></button>
          </div>
        </form>



      </div>
    </div>

  )
}


export default FormEdit