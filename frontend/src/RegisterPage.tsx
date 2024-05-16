import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export default function RegisterPage(){

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate();
    function onSubmitRegister(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        axios.post("/api/user/register",  {username,  password})
             .then(() => navigate("/login"))
    }

    return(
        <>
        <form onSubmit={onSubmitRegister}>
            <input value={username} placeholder={"Please enter Username"} type={"text"}
                   onChange={e=> setUsername(e.target.value)}/>
            <input value={password} placeholder={"Please enter Password"} type={"password"}
                   onChange={e=> setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
        </>
    )
}