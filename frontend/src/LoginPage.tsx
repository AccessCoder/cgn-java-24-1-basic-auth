import {FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type LoginPageProps ={
    setUser :(user:string) => void
}
export default function LoginPage(props:LoginPageProps){

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate();
    function onSubmitLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        axios.get("/api/user/me")//Warum? -> Durch das Get erhalten wir unseren ersten XSRF Token, damit wir POST request schicken dürfen!
            .then(() =>
                axios.post("/api/user/login", undefined, {auth: {username,  password}})
                    .then(response => props.setUser(response.data))
                    .then(() => navigate("/hello"))
            )

    }

    return(
        <>
            <form onSubmit={onSubmitLogin}>
                <input value={username} placeholder={"Please enter Username"} type={"text"}
                       onChange={e=> setUsername(e.target.value)}/>
                <input value={password} placeholder={"Please enter Password"} type={"password"}
                       onChange={e=> setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </>
    )
}