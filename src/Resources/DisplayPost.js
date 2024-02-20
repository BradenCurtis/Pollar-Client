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

        return firstSplit[0] + "-" + firstSplit[1] + "-" + dayString;
        
        

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
                    <p>Option 1: {props.option1}</p>
                </div>
                <div className="postOption2">
                    <p>Option 2: {props.option2}</p>
                </div>
                
            </div>
            <div className="postFooter">
                <p>Option 1: {props.vote1}</p>
                <p>Split: {props.vote1 > props.vote2 ? Math.floor((props.vote1 / (props.vote1 + props.vote2)) * 100) / 100 : Math.floor((props.vote2 / (props.vote1 + props.vote2)) * 100) / 100}</p>
                <p> Option 2: {props.vote2}</p>        
            </div>
        </div>
    )
}