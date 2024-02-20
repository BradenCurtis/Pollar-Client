import {useState, useContext, useEffect} from "react"
import {DisplayRecentFeed} from "../Resources/DisplayRecentFeed.js"
import { FeedContext } from "../App.js"
import { DisplayTopFeed } from "../Resources/DisplayTopFeed.js";
import axios from "axios";

export const TopFeed = () => {

    const {feedElements, setFeedElements} = useContext(FeedContext);


    

    return(
    <div>

        <div className="topFeed">
            <DisplayTopFeed />
        </div>

        

    </div>
    )
}