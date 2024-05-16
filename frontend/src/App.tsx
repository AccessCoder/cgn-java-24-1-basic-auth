import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import {useState} from "react";
import HelloPage from "./HelloPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import axios from "axios";
import RegisterPage from "./RegisterPage.tsx";

function App() {

    const [user, setUser] = useState<string>("anonymousUser")

    function logout() {
        axios.post("/api/user/logout")
            .then(() => setUser("anonymousUser"))
    }


    return (
        <>
            <button onClick={logout}>Logout</button>
            <Routes>
                <Route path={"/"} element={<RegisterPage/>}/>
                <Route path={"/login"} element={<LoginPage setUser={setUser}/>}/>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path={"/hello"} element={<HelloPage/>}/>
                </Route>
            </Routes>
        </>
    )

}

export default App
