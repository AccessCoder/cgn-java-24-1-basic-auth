import {useEffect, useState} from "react";
import axios from "axios";

export default function HelloPage(){

    const [message, setMessage] = useState<string>("")

    useEffect(() =>{
        axios.get("/api/hello")
            .then(r => setMessage(r.data))
    }, [])

    return(
        <>
        <h1>{message}</h1>
        </>
    )
}