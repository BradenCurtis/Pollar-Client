//import { useContext } from "react"
//import { FeedContext } from "../App"

export const DisplayPost = (props) => {

    //const {feedElements, setFeedElements} = useContext(FeedContext);

    const fixDate = (element) => {
        const origSplit = element.createdAt.split("T");
        const firstSplit = origSplit[0].split("-");
        const secondSplit = origSplit[1].split(":");
        const hour = parseInt(secondSplit[0]);
        let day = parseInt(firstSplit[2]);

        if (hour <= 6){
            day = day - 1;
        }

        const dayString = day.toString();

        return firstSplit[1] + "-" + dayString + "-" + firstSplit[0];
        
        

    }


    return(
        <div className="postTop">
            <div className="postHeader">
                <p className="postTitle">{props.title}</p>
                <div className="postUserDate">
                    <p className="postUsername">@{props.username}</p>
                    <p className="postDate">Date: {fixDate(props)}</p>
                </div>
            </div>
            <div className="postBody">
                <div className="postOption1">
                    <p><b>Left:</b> {props.option1}</p>
                </div>
                <div className="postOption2">
                    <p><b>Right:</b> {props.option2}</p>
                </div>
                
            </div>
            <div className="postFooter">
                <p>Votes: {props.vote1}</p>
                <p>{Math.floor((props.vote1 / ((props.vote1 + props.vote2) || 1)) * 1000) / 10}% - Split - {Math.floor((props.vote2 / ((props.vote1 + props.vote2) || 1)) * 1000) / 10}%</p>
                <p>Votes: {props.vote2}</p>        
            </div>
        </div>
    )
}