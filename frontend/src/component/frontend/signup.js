import React,{useState} from 'react'

const Signup=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const collectData=()=>{
        console.warn(name,email,password)
    }
    return(
        <div className="register">
    <h1> Signup </h1>
    <input className="inputBox"  type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder=" Enter Name" />
    <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
    <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
    <button onClick={collectData} className="appButton" type="button">Signup</button>
    </div>
    );

}
export default Signup;