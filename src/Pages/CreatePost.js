import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useContext, useEffect } from "react"
import { FeedContext } from "../App"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const CreatePost = () => {
    
    const {feedElements, setFeedElements, refresh, setRefresh} = useContext(FeedContext);

    useEffect(() => {
        const user = sessionStorage.getItem("username");
        if (!user){
            navigate("/login");
            alert("You must be logged in to make a post.");
        }
    }, []);

    const schema = yup.object().shape({
        title: yup.string().max(80, "Max Characters: 80").required("A Title is needed"),
        option1: yup.string().max(250, "Max Characters: 250").required("Provide an option 1"),
        option2: yup.string().max(250, "Max Characters: 250").required("Provide an option 2")
        
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        
        
        

        
        const newPost = {
            "title": data.title,
            "option1": data.option1,
            "option2": data.option2,
        }
        axios.post("https://pollar-server-1146522ba7f7.herokuapp.com/posts",
         newPost, 
         {headers: {accessToken: sessionStorage.getItem("accessToken")}})
         .then((response) => {
            //console.log("Post uploaded to DB");
            //console.log(newPost);
            navigate("/");
        }, (error)=> {
            
            navigate("/login");
        });
        
        
    }
    
    return(
    <div className="createPost">
        <form className="createPostForm" onSubmit={handleSubmit(onSubmit)}>

            <div className="makeRow">
                <input className="createPostTitle" type="text" placeholder="Title" {...register("title")} />
                <p className="createPostError">{errors.title?.message}</p>
            </div>

            <div className="makeRow">
                <textarea className="createPostText" type="text" placeholder="Option 1" {...register("option1")} />
                <p className="createPostError">{errors.option1?.message}</p>
            </div>

            <div className="makeRow">
                <textarea className="createPostText" type="text" placeholder="Option 2" {...register("option2")} />
                <p className="createPostError">{errors.option2?.message}</p>
            </div>

            <input className="createPostSubmit" type="submit" value="Post"/>

        </form>
    </div>
    )
}