import React, {Fragment} from 'react';
import logo from "../../photo/glopal/logo.svg"
import authImg from "../../photo/auth/img.png"
import './Register.scss'
import RegisterForm from './RegisterForm';
const Register = () => {
    return (
        <div dir='ltr' className='auth-container'> 
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 bg-dark h-100 pt-3 vh-100 text-center'>
                        <div className='img-logo mt-4'>
                            <img className='' src={logo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container container-2 py-lg-1'>
                <div className='row'>
                    <div className='col-lg-5 mt-4'>
                        <div className='login-form p-lg-5 text-center '>
                            <h5> !اهلا بك، قم بتسجيل الدخول </h5>
                            <RegisterForm />
                        </div>
                    </div>
                    <div className="col-lg-7 icon-auth">
                        <img src={authImg} alt="login" />
                        <div className="d-flex justify-content-end">
                           <div className='text-right'>
                                <h1 className='mb-2'>اهلاً بك في تربل زيرو</h1>
                                <h4>تابع و أعمالك و أدرها من أي مكان</h4>                                
                           </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Register;
