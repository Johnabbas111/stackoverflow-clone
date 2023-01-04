import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './Auth.css'
import icon from '../../assests/icon.png'
import AboutAuth from "./AboutAuth"
import {signUp,login} from '../../actions/auth'

const Auth =()=>{
    const [isSignup, setIsSignup]=useState(false)
    const [name,setName]=useState(' ')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email&&!password){
            alert("enter email and password")
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
           dispatch(signUp({name,email,password},navigate))
        }else{
           dispatch(login({name,password},navigate))
        }
       

    }


    return(
        <>
        <section className="Auth-section">
            {isSignup&&  <AboutAuth/>}
        <div className='Auth-container-2'>
           
            {!isSignup && <img src={icon} alt= "stack-overflow" className='login-logo'/>}
            <form onSubmit={handleSubmit}>
                {
                    isSignup &&(
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" name="name"value={name} onChange={(e)=>setName(e.target.value) } id="name"></input>
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)} } id='email'/>

                </label>
                <label htmlFor="password">
                     <div  style={{display:"flex",justifyContent:"space-between"}}>
                         <h4>Password</h4>
                        {!isSignup&& <p style={{color:"#007ac6" ,fontSize:"13px"}}>Forget Password?</p>}
                        </div>
                    <input type='password' name='password'  value={password} onChange={(e)=>{setPassword(e.target.value)} } id="password"/>
                    {isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Password must contain at least eight<br/> characters ,including at least<br/> 1 letter and 1 number</p>}

                </label>
                



                {isSignup &&(
                    <label htmlFor="check">
                        <input type='checkbox' id='check'/>
                        <p style={{fontsize:"13px"}}>otp-in to recieve occasional,<br/> product updates,user research invitation,<br/>company announcements,and digest</p>
                    </label>
                )}
                <button type='submit' className="Auth-btn" >{isSignup?'Sign up':'Log in'}</button>
                {isSignup && (
                    <p style={{ color:"#666767" , fontSize:"13px"}}>
                        by clicking "Sign up" you agree to our
                         <span style={{color:"#007ac6"}}> terms of<br/> service</span> ,
                         <span style={{color:"#007ac6"}}> privacy policy</span >and 
                         <span style={{color:"#007ac6"}}> cookie policy</span>
                    </p>
                )}

            </form>
            <p>
                {isSignup?"Already have an account?":"don't have an account?"}
                <button type='button' className="handle-switch-button" onClick={handleSwitch}  > {isSignup? "login":"signUp"}</button>
            </p>


 
        </div>
        </section>
      

      

        </>
       
    )

}
export default Auth;