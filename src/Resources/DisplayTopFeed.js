import { DisplayPost } from "./DisplayPost"
import { FeedContext } from "../App"
import { useContext, useEffect } from "react";
import axios from "axios";

export const DisplayTopFeed = () => {

    const feedQuantity = 5;

    const popularVolumeSensitivity = 30 //Must be larger than 1
    const popularSplitSensitivity = 150 //Must be larget than 100

    const {feedElements, setFeedElements, setPopularFeedElements, popularFeedElements} = useContext(FeedContext);

    useEffect(() => {
        updatePopularElements();
    }, [feedElements]);

    useEffect(() => {
        axios.get("https://pollar-server-1146522ba7f7.herokuapp.com/posts").then((response) => {
          //console.log(response.data);
          setFeedElements(response.data);
        });
      }, [])

    const updatePopularElements = () => {
        
        const temp = [...feedElements];
        const sortedElements = temp.sort((a, b) => {

            if (a.Vote1s.length == 0 && a.Vote2s.length == 0){
                return 1;
            }
            if (b.Vote1s.length == 0 && b.Vote2s.length == 0){
                return -1;
            }

            const SortValueA = ((popularVolumeSensitivity - (Math.abs(a.Vote1s.length - a.Vote2s.length))/(a.Vote1s.length + a.Vote2s.length)) * (popularSplitSensitivity - ((100 + a.Vote1s.length + a.Vote2s.length)/(a.Vote1s.length + a.Vote2s.length))))
            const SortValueB = ((popularVolumeSensitivity - (Math.abs(b.Vote1s.length - b.Vote2s.length))/(b.Vote1s.length + b.Vote2s.length)) * (popularSplitSensitivity - ((100 + b.Vote1s.length + b.Vote2s.length)/(b.Vote1s.length + b.Vote2s.length))))


            if (SortValueA > SortValueB){
                return 1;
            }
            else if (SortValueA < SortValueB){
                return -1;
            }
            else {
                return 0;
            }

            //return ((popularVolumeSensitivity - (Math.abs(b.vote1 - b.vote2))/(b.vote1 + b.vote2)) * (popularSplitSensitivity - ((100 + b.vote1 + b.vote2)/(b.vote1 + b.vote2))))-((popularVolumeSensitivity - (Math.abs(a.vote1 - a.vote2))/(a.vote1 + a.vote2)) * (popularSplitSensitivity - ((100 + a.vote1 + a.vote2)/(a.vote1 + a.vote2))))
        });
        
    //console.log(sortedElements);
        const popularElements = sortedElements.slice(0, feedQuantity);
        popularElements.reverse();
        setPopularFeedElements(popularElements);
    };

    const upvote1 = (postId) => {
        axios
        .post(
            "https://pollar-server-1146522ba7f7.herokuapp.com/vote1", 
            {PostId: postId}, 
            {headers: {accessToken: sessionStorage.getItem("accessToken")}})
        .then((response) => {
            setFeedElements(
                feedElements.map((element) =>{
                    if (element.id == postId){
                        if(response.data.voted){
                            return {...element, Vote1s: [...element.Vote1s, 0]}
                        }else {
                            const voteArray = element.Vote1s;
                            voteArray.pop();
                            return {...element, Vote1s: voteArray}
                        }
                    } else {
                        return element;
                    }
                })
            )
        }).catch((error) => {
            alert("You must be logged in to vote");
        })  

        
    }

    
    const upvote2 = (postId) => {
        axios
        .post(
            "https://pollar-server-1146522ba7f7.herokuapp.com/vote2", 
            {PostId: postId}, 
            {headers: {accessToken: sessionStorage.getItem("accessToken")}})
        .then((response) =>{ 
        setFeedElements(
            feedElements.map((element) =>{
                if (element.id == postId){
                    if(response.data.voted){
                        return {...element, Vote2s: [...element.Vote2s, 0]}
                    }else {
                        const voteArray = element.Vote2s;
                        voteArray.pop();
                        return {...element, Vote2s: voteArray}
                    }
                } else {
                    return element;
                }
            }))

        }).catch((error) => {
            alert("You must be logged in to vote");
        })    
    }

    const splitVote = (postIdsrc) => {

        const userIdsrc = sessionStorage.getItem("id");
        
        let splitupvote2 = true;
        let splitupvote1 = true;

        axios.get("https://pollar-server-1146522ba7f7.herokuapp.com/vote2").then((response) => {
            
            var vote2Array = response.data;

            for (var i = 0; i < vote2Array.length; i++){
                if (vote2Array[i].PostId == postIdsrc && vote2Array[i].UserId == userIdsrc){ 
                    splitupvote2 = false
                }}


            axios.get("https://pollar-server-1146522ba7f7.herokuapp.com/vote1").then((response) => {
            
                var vote1Array = response.data;
                
    
                for (var i = 0; i < vote1Array.length; i++){
                    if (vote1Array[i].PostId == postIdsrc && vote1Array[i].UserId == userIdsrc){ 
                        splitupvote1 = false
                    }}
                if (splitupvote1 && splitupvote2){ 
                    //console.log("double if executed")
                    axios
                        .post(
                            "https://pollar-server-1146522ba7f7.herokuapp.com/vote2", 
                            {PostId: postIdsrc}, 
                            {headers: {accessToken: sessionStorage.getItem("accessToken")}})
                        .then((response) => {}).catch((error) => {
                            
                        })  
                    axios
                        .post(
                            "https://pollar-server-1146522ba7f7.herokuapp.com/vote1", 
                            {PostId: postIdsrc}, 
                            {headers: {accessToken: sessionStorage.getItem("accessToken")}})
                        .then((response) => {
                            setFeedElements(
                                feedElements.map((element) =>{
                                    if (element.id == postIdsrc){
                                        
                                        return {...element, Vote1s: [...element.Vote1s, 0], Vote2s: [...element.Vote2s, 0]}
                                        
    
                                    } else {
                                        return element;
                                    }
                                })
                            )
                        }).catch((error) => {
                            alert("You must be logged in to vote");
                        })  
                }
                else if (splitupvote1){
                    //console.log("upvote1 if executed");
                    upvote1(postIdsrc);
                }
                else if (splitupvote2){
                    //console.log("upvote2 if executed");
                    upvote2(postIdsrc);
                }
            });

        });

        
        
       



        
        //console.log(postIdsrc);
    }

    const deletePost = (PostId) => {
        
        const secondChance = window.confirm("Are you sure you want to delete this post. This action cannot be undone.");

        if (secondChance){

        let config = {headers: {accessToken: sessionStorage.getItem("accessToken")}, data: {PostId: PostId}}
        axios.delete("https://pollar-server-1146522ba7f7.herokuapp.com/posts",config)
        .then(() => {
            //console.log("front end post deleted");
            window.location.reload();
        }).catch((error) => {
            console.log("Error when deleting", JSON.stringify(error));
        })
        
    }
    }
    

    return(
        <div>
            <div className="postDisplayList">
                {popularFeedElements.map((element) =>{
                    return (
                    <div className="postWhole" key={element.id} >
                        <DisplayPost title={element.title} option1={element.option1} option2={element.option2} vote1={element.Vote1s.length} vote2={element.Vote2s.length} createdAt={element.createdAt} id={element.id} username={element.username}/>
                        <div className="postVoting">
                            <button className="upvote" onClick={() => upvote1(element.id)}>Option 1</button>
                            <button className="upvote" onClick={() => splitVote(element.id)}>Split Em'</button>
                            <button className="upvote" onClick={() => upvote2(element.id)}>Option 2</button>
                            {sessionStorage.getItem("username") == element.username && (<button className="deleteButton" onClick={() => {deletePost(element.id)}}>Delete</button>)}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}