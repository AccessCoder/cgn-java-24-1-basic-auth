import {Navigate, Outlet} from "react-router-dom";

type ProtectedRouteProps = {
    user:string | undefined
}
export default function ProtectedRoute(props:ProtectedRouteProps){

    const user = props.user !== undefined && props.user !== "anonymousUser"

    return(
        user ? <Outlet/> : <Navigate to={"/login"} />
    )
}