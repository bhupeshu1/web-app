import React,{ useEffect, useState } from 'react'
import './style.css'
import { validEmail,validPassword } from '../../../Regex'
import logo_image from '../../../assets/images/logo_image.jpg'
import { AiOutlineEye} from 'react-icons/ai';
import { BsEyeSlash} from 'react-icons/bs';
// import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [pwderrorRemove, setPwderrorRemove] = useState(false);
  const [showPassword,setShowPassword]=useState(false);
  // const [emaerrorRemove, setPwderrorRemove] = useState(false);



const validdationEmail=validEmail.test(email);
const validdationPassword=validPassword.test(password);
console.log("sdasdasdas",showPassword);
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");


  const validate = () => {
    if (!validdationEmail && pwderrorRemove ) {
      setEmailErr(true);
   }else{
    setEmailErr(false)
   }
   if (!validdationPassword && pwderrorRemove) {
      setPwdError(true);
   }else{
    setPwdError(false)
   }

 };
  useEffect(()=>{
    validate();
    },[password,email,pwderrorRemove])
  
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
          <input 
          type='email'
           placeholder='Email' 
           onChange={(e) => setEmail(e.target.value)}
           value={email}></input>
            {emailErr && <p style={{color:"red"}}>Please enter your password and email</p>}
        </div>
       
        <div className='input-box'>
          <div className='label'>Password:</div>
          <input 
          type={showPassword ? "password" :"text"}
           placeholder='Password'
           onChange={(e) => setPassword(e.target.value)}
            value={password} 
            ></input>
            {showPassword ? <div style={{cursor:"pointer"}}  onClick={()=>setShowPassword(false)}><AiOutlineEye/></div>
            :<div style={{cursor:"pointer"}} onClick={()=>setShowPassword(true)}> 
           <BsEyeSlash/>
            </div>
           

}
            {pwdError && <p style={{color:"red"}}>Your password is invalid</p>}
        </div>
        <div className='button'>
          <button className='login-btn' onClick={()=>setPwderrorRemove(true)}>Login</button>

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