import React, { useRef, useState } from 'react';
import "../Css/signup.css";
import validator from 'validator';
import logo from "../Images/logo.png";

export const Signup = () => {

  const [signupmessage, setsignupmessage] = useState("All fields are mandatory *");
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmpass = useRef("");
  

  const signupfunc=(a,b,c,d )=>{
    console.log(a.current.value);
    console.log(b.current.value);
    console.log(c.current.value);
    console.log(d.current.value);
    if(a.current.value==='' || b.current.value==='' || c.current.value==='' || d.current.value===''){
        setsignupmessage("All fields are mandatory *");
   }
   else if(a.current.value.length <6){
        setsignupmessage("Username less than 6 characters");
   }
   else if(!validator.isEmail(b.current.value)){
        setsignupmessage("Please enter a valid email.");
   }
   else if(c.current.value.length <8){
        setsignupmessage("Password less than 8 characters");
   }
   else if(c.current.value!==d.current.value){
        setsignupmessage("Password fields doen't match");
   }
   else{

    // Firebasepart
    setsignupmessage("All fields are mandatory *");
    a.current.value="";
    b.current.value="";
    c.current.value="";
    d.current.value="";
   }

  }

  return (
    <div className="Signup">
        <div className="signuplogo">
            <img src={logo} alt="" className='image' />
        </div>

        <div className="signuptext">{signupmessage}</div>

        <div className="form">
            <div className="form-group">
            <input type="text" className="form-control" id="usr" placeholder='username' ref={username}/>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" id="pwd" placeholder='email address' ref={email}/>
            </div>
            <div className="signuppasswords">
                <div className="form-group signuppass" >
                    <input type="password" className="form-control" id="pwd1" placeholder='password' ref={password}/>
                </div>
                <div className="form-group signuppass">
                   <input type="password" className="form-control" id="pwd2" placeholder='Confirm password' ref={confirmpass}/>
                </div>
            </div>
        </div>



        <div className="signupbuttons">
            <button type="button" className="btn btn-dark signuptopbtn" onClick={()=>{signupfunc(username,email,password,confirmpass)}} >signup</button>
            <button type="button" className="btn btn-dark signupbelowbtn" >Back</button>
        </div>
    </div>
  )
}




