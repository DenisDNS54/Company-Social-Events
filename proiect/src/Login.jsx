import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
            
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home", {state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("This user does not exist!")
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
            <h1>Log In</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} name="Email" id="" /><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="Password" id="" /><br></br>

                <input type="submit" onClick={submit}/>
            </form>

            <br /><p>OR</p><br />

            <Link to="/signup">Sign Up Page</Link>
        </div>
    )
}

export default Login;