import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import {jwtDecode} from 'jwt-decode';
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {

    const navigate = useNavigate();


    const schema = yup.object().shape({
        Username: yup.string().required("Please Enter Your Username"),
        Password: yup.string().required("Please Enter Your Password")
        
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        //console.log(data);
        
        const loginUser = {
            "username": data.Username,
            "password": data.Password,
        }
            axios.post("http://localhost:3001/users/login", loginUser).then((response) => {
            if (response.data.error) {alert(response.data.error);}
            else{
                sessionStorage.setItem("accessToken", response.data);
                var decoded = jwtDecode(response.data);
                sessionStorage.setItem("username", decoded.username);
                sessionStorage.setItem("id", decoded.id);
                navigate("/");
            }
        });

        
    }

    const toAbout = () => {
        navigate("/about");
    }

    return(

        <div className="loginSignup">
            <p className="pollarTitle" onClick={toAbout}>P o l l - a r</p>
            <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <p className="loginSignuptext">Username:</p>
                        <div className="makeColumn">
                            <input className="loginSignupInput" type="text" {...register("Username")}/>
                            <p className="loginSignupError">{errors.Username?.message}</p>
                        </div>
                    </div>
                    <div>
                        <p className="loginSignuptext">Password:</p>
                        <div className="makeColumn">
                            <input className="loginSignupInput" type="password" {...register("Password")}/>
                            <p className="loginSignupError">{errors.Password?.message}</p>
                        </div>
                    </div>
                    <div>
                       
                        <input className="loginSignupSubmit" type="submit" value="Login"/>
                    </div>
                    
                    <p className="loginPrivacyText"><Link to="/privacy">Privacy Policy</Link></p>
                    
                </div>
            </form>
            
            
        </div>

    )
}