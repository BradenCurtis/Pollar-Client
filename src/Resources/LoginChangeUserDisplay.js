import { Link } from "react-router-dom";

export const LoginChangeUserDisplay = () => {

    let username = sessionStorage.getItem("username");

    if (username){
        return (
            <>
                <Link to="/login">Change User</Link>
            </>
            );
    } else{
        return (
            <>
            <Link to="/login">Login</Link>
            
            <Link to="/signup">SignUp</Link>
            </>
            );
    }


}