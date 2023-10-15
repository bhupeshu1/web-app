import React from 'react'
import './style.css'
import logo_image from '../../../assets/images/logo_image.jpg'
const Login = () => {
  return (
    <div className='Form-container'>
      
      <div className='form'>
        <div className='logo'>
         <img src={logo_image} alt='image'/>
        </div>
        <div className='form-header-text'>
        <h1>Login</h1>
        </div>
        <div className='input-box'>
          <div className='label'>Email:</div>
          <input type='email' placeholder='Email'></input>
        </div>
        <div className='input-box'>
          <div className='label'>Password:</div>
          <input type='Password' placeholder='Password'></input>
        </div>
        <div className='button'>
          <button className='login-btn'>Login</button>
        </div>
        <div className='sign-up-text'>
         <p>or Sign Up Using</p> 
         <p className='sign-up-text-button'>Sign Up</p>
        </div>
     
      </div>
    </div>
  )
}

export default Login