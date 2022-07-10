import React from 'react';
import "../Css/signup.css";
import logo from "../Images/logo.png";

export const Signup = () => {
  return (
    <div className="Signup">
        <div className="signuplogo">
            <img src={logo} alt="" className='image' />
        </div>



        <div className="form">
            <div className="form-group">
            <input type="text" className="form-control" id="usr" placeholder='username'/>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" id="pwd" placeholder='email address'/>
            </div>
            <div className="signuppasswords">
                <div className="form-group signuppass" >
                    <input type="password" className="form-control" id="pwd" placeholder='password'/>
                </div>
                <div className="form-group signuppass">
                   <input type="password" className="form-control" id="pwd" placeholder='Confirm password'/>
                </div>
            </div>
        </div>



        <div className="signupbuttons">
            <button type="button" className="btn btn-dark signuptopbtn" active>signup</button>
            <button type="button" className="btn btn-dark signupbelowbtn" active>Back</button>
        </div>
    </div>
  )
}




