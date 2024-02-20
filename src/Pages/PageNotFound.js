import {useNavigate} from 'react-router-dom'

export const PageNotFound = () => {

    const returnHome = () => {
        navigate("/")
    }

    const navigate = useNavigate();

    return(
        <div className='pageNotFound'>
            <h1>Sorry, Page not found</h1>
            <button onClick={returnHome}>Return Home</button>
        </div>
    
    )
}