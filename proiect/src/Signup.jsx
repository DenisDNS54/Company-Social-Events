import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
            
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("This user already exists!")
                }
                else if(res.data=="notexist"){
                    history("/home", {state:{id:email}})
                }
            })
            .catch(e=>{
                alert("Wrong details!")
                console.log(e);
            })

        } catch (e) {
            console.log(e);           
        }
    }

    return (
        <div className="login">
            <h1>Sign Up</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} name="Email" id="" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="Password" id="" />

                <input type="submit" onClick={submit}/>
            </form>

            <br /><p>OR</p><br />

            <Link to="/">Log In Page</Link>
        </div>
    )
}

export default Signup;