import {CreatePost} from "./CreatePost.js"
import { useEffect } from "react"


export const Create = () => {

/* useEffect(() => {
    const user = sessionStorage.getItem("username");
    if (!user){
        //alert("You must be logged in to make a post!")
    }
}) */

return (
    <div className="createPage">

        <p className="suggestions">Stuck? Look at the top posts for inspiration!</p>

        <CreatePost />
    </div>
)

}