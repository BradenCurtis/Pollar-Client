import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";


export const SignUp = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        Username: yup.string().min(4, "Username must be at least 4 characters long").max(20, "Username must not exceed 20 charcters").required("Please Enter Your Username"),
        Password: yup.string().min(6, "Password must be at least 6 characters long").max(20, "Password must not exceed 20 charcters").required("Please Enter Your Username").required("Please Enter Your Password"),
        RepeatPassword: yup.string().oneOf([yup.ref("Password"), null], "Passwords must match")
        .required("Please repeat your password")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        
        const newUser = {
            "username": data.Username,
            "password": data.Password,
        }

        axios.post("http://localhost:3001/users/register", newUser).then((response) => {
            //console.log("User uploaded to DB");
            //console.log(data);
            navigate("/login");
        });        
    }

    return(


        <div className="loginSignup">
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
                        <p className="loginSignuptext">Repeat Password:</p>
                        <div className="makeColumn">
                            <input className="loginSignupInput" type="password" {...register("RepeatPassword")}/>
                            <p className="loginSignupError">{errors.RepeatPassword?.message}</p>
                        </div>
                    </div>
                    <div className="signupPrivacy">
                        <p className="signupPrivacyText">By creating an account you 
                        agree to our <Link to="/privacy">Privacy Policy</Link></p>
                    </div>
                    
                    <div>
                       
                       
                        <input className="loginSignupSubmit" type="submit" value="Create Account"/>
                    </div>
                </div>
            </form>
        </div>

    )
}