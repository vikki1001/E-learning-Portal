import React, { useState } from "react";
import { Link }  from 'react-router-dom'
import Validation from './loginvalidation';

const Login = () => {
    const[values, setValues] =useState({
        email:'',
        password:''
    })
    const [errors,setErrors]= useState({})
    const handleInput = (event) =>{
        setValues(prev =>({...prev, 
            [event.target.name]: [event.target.values]
        }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email ==="" && errors.password===""){
            console.log("api call");
        // .then(res =>{
        //     if(res.rows ==="Success")
        // })
        // .catch(err => console.log(err));

        }
    }

    return (
        <div className="hold-transition register-page">
        <div className="register-box">
            <div className="register-logo">
                <a href="../../index2.html"><b>Login</b></a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="" onSubmit={handleSubmit}>
                    
                        <div className="input-group mb-3">
                        
                            <input type="email" onChange={handleInput} className="form-control"  placeholder="Email" />
                            
                            <div className="input-group-append">
                            
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                                
                            </div>
                        </div>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <div className="input-group mb-3">
                        
                            <input type="password" onChange={handleInput} className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text"><span className="fas fa-lock" /></div>
                            </div>
                        </div>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                        </a>
                    </div>
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                    <Link to="/forgot-password" element={<forgot-password /> }>I forgot my password</Link>
                     </p>
                    <p className="mb-0">
                    <Link to="/" element="{<registration /> }">Register a new membership</Link>
                    </p>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>

    </div>

    )
}

export default Login;