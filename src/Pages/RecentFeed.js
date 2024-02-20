import {useEffect, useContext} from "react"
import {DisplayRecentFeed} from "../Resources/DisplayRecentFeed.js"
import { FeedContext } from "../App.js"
import axios from "axios"

export const RecentFeed = () => {

    const {feedElements, setFeedElements} = useContext(FeedContext);

    

    return(
    <div>
        <div className="recentFeed">
            <DisplayRecentFeed />
        </div>

        

    </div>
    )
}