import { useNavigate } from "react-router-dom";

export const About = () => {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/login");
    }

    return (
        <div className="aboutWhole">
            <div className="privacyTitle">
                <p>About Poll-ar</p>
                <button className="privacyButton" onClick={returnHome}>Return to Login</button>
            </div>
            

            <p className="aboutIntro">Welcome to Poll-ar, a fresh and emerging social media platform built around difficult Polls.</p><p className="aboutIntro"> If you do not already have an account, sign up and give it a shot!</p>
            <p className="aboutHeader">What to Post:</p>
            
            <p className="aboutBody">Anything you can think of! Your Poll will consist of two option fields. Your goal it to make it difficult for other users to choose between your options. Lastly, make sure to give your Poll a title!</p>
            <p className="aboutHeader">Voting:</p>
            <p className="aboutBody">When voting on a Poll, choose whichever option you'd rather pick. If you're really stuck, you can choose to Split Em' and this will vote for both options.</p>
            <p className="aboutHeader">Popular Page:</p>
            <p className="aboutBody">The posts that have split the votes most evenly and have the greatest volume of votes will be featured on our popular page!</p>
            <p className="aboutHeader">Creator:</p>
            <p className="aboutBody">Poll-ar was created by Braden Curtis, a software engineer studying at the University of Arizona</p>
            
            
        </div>
    )
}