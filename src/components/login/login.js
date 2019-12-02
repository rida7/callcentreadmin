import  React,{useState} from  'react'
import axios from 'axios';
import {apiPath} from '../../config'


export default ()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [errormessage,setErrormessage]=useState("");

    const userAuthentication=(event)=>{
        event.preventDefault();
        let payLoad={email:email,password:password};
        axios.post(apiPath+"/api/login",payLoad).then(response=>{
            localStorage.setItem("token",response.data.token);
            setPassword("");
            setEmail("");
            window.location.replace("/");
        })
            .catch(err=>{
                if (err.message === "Request failed with status code 404") {
                    setErrormessage("Invalid Password");
                }
                else if (err.message === "Request failed with status code 500")
                {
                    setErrormessage("Email does not exist");
                }

            });


    };


    return(
        <>
        <form className='demoForm' onSubmit={event=>userAuthentication(event)}>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' name='email' value={email} onChange={event=>setEmail(event.target.value)} required/>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' name='password' value={password} onChange={event=>setPassword(event.target.value)} required />
            </div>
            <p style={{color: "red"}}>{errormessage}</p>
            <button className='btn btn-primary' type="submit">
                submit
            </button>

        </form>
        </>
    );
}