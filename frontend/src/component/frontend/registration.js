import React, {useEffect, useState} from "react";
import axios from "axios";
// import { Formik, Form } from "formik";
// import * as Yup from 'yup';
// import FormikControler from './FormikControler';


const Registration = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    

    // const formik = useFormik({
    //     initialValues:{
    //         name:'',
    //         email:'',
    //         phone:'',
    //         password:''
    //     }
    // })
    // console.log('Form values', formik.values)

    // const option = [
    //     { key: 'Email', value: 'tt'},
    //     { key: 'phone', value: '9988776655'}

    // ]
    
    const collectData = async() =>{
        let userData= {name,email,phone,password};
        console.log(userData);

        const res =  await axios.post("http://localhost:7000/api/v1/user",userData) 
          const result = res.data
          console.log(result)
        }
        
       
        useEffect(() =>{
         collectData();
        },[])
      

    return (
        <div className="hold-transition register-page">
        <div className="register-box">
            <div className="register-logo">
                <b>Registration</b>
            </div>
            <div className="card">
                <div className="card-body register-card-body">
                    <p className="login-box-msg">Register a new membership</p>
                    {/* <form> */}
                        <div className="input-group mb-3">
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Phone" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="input-group mb-3">
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Retype password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                    <label htmlFor="agreeTerms">
                                        I agree to the terms 
                                    </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit"  onClick={collectData} className="btn btn-primary btn-block">Register</button>
                            </div>
                            {/* /.col */}
                        </div>
                    {/* </form> */}
                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" />
                            Sign up using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" />
                            Sign up using Google+
                        </a>
                    </div>
                    <a href="login.html" className="text-center">I already have a membership</a>
                </div>
                {/* /.form-box */}
            </div>{/* /.card */}
        </div>
        

    </div>
        // <div className="hold-transition register-page">
        //     <div className="register-box">
        //         <div className="register-logo">
        //             <b>Registration</b>
        //         </div>
        //         <div className="card">
        //             <div className="card-body register-card-body">
        //                 <p className="login-box-msg">Register a new membership</p>
        //                 <form>
        //                     <div className="input-group mb-3">
        //                         <input type="text"  onChange={formik.handleChange} 
        //                          value={formik.values.name} className="form-control" placeholder="Name" />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <span className="fas fa-user" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="input-group mb-3">
        //                         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <span className="fas fa-envelope" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="input-group mb-3">
        //                         <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Phone" />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <span className="fas fa-envelope" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="input-group mb-3">
        //                         <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <span className="fas fa-lock" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* <div className="input-group mb-3">
        //                         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Retype password" />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <span className="fas fa-lock" />
        //                             </div>
        //                         </div>
        //                     </div> */}
        //                     <div className="row">
        //                         <div className="col-8">
        //                             <div className="icheck-primary">
        //                                 <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
        //                                 <label htmlFor="agreeTerms">
        //                                     I agree to the terms 
        //                                 </label>
        //                             </div>
        //                         </div>
        //                         {/* /.col */}
        //                         <div className="col-4">
        //                             <button type="submit"  onClick={collectData} className="btn btn-primary btn-block">Register</button>
        //                         </div>
        //                         {/* /.col */}
        //                     </div>
        //                 </form>
        //                 <div className="social-auth-links text-center">
        //                     <p>- OR -</p>
        //                     <a href="#" className="btn btn-block btn-primary">
        //                         <i className="fab fa-facebook mr-2" />
        //                         Sign up using Facebook
        //                     </a>
        //                     <a href="#" className="btn btn-block btn-danger">
        //                         <i className="fab fa-google-plus mr-2" />
        //                         Sign up using Google+
        //                     </a>
        //                 </div>
        //                 <a href="login.html" className="text-center">I already have a membership</a>
        //             </div>
        //             {/* /.form-box */}
        //         </div>{/* /.card */}
        //     </div>
            

        // </div>
    )
}

export default Registration;