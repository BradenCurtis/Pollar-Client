import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {RecentFeed} from "./Pages/RecentFeed.js"
import {Create} from "./Pages/Create.js"
import {PageNotFound} from "./Pages/PageNotFound.js"
import {useState, createContext, useEffect} from "react"
import { TopFeed } from './Pages/TopFeed.js';
import axios from 'axios';
import { Login } from './Pages/Login.js';
import { SignUp } from './Pages/SignUp.js';
import {UsernameDisplay} from './Resources/UsernameDisplay.js';
import {LoginChangeUserDisplay} from './Resources/LoginChangeUserDisplay.js';
import {GuestOrReturnHome} from './Resources/GuestOrReturnHome.js';
import { PrivacyPolicy } from './Pages/PrivacyPolicy.js';
import {About} from './Pages/About.js';

export const FeedContext = createContext();


function App() {
  
  const [refresh, setRefresh] = useState();
  const [feedElements, setFeedElements] = useState([]);
  const [popularFeedElements, setPopularFeedElements] = useState([]);
  
  


  return (
    <FeedContext.Provider value={{feedElements, setFeedElements, popularFeedElements, setPopularFeedElements, refresh, setRefresh}}>
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={
            <>
            <div className='pageHeader'>
              <div className='usernameDisplay'>
                  {<UsernameDisplay/>}
              </div>
              <div className='navbar'>
                
                
                <Link to="/create">New Post</Link>
                
                <Link to="/popular">Popular</Link>
                
                <LoginChangeUserDisplay/>
                
              </div>
              <div>
                <p className='pageTitle'>Recent Feed</p>
              </div>
            </div>
            
          <RecentFeed />
          </>
          } />


          <Route path="/create" element={
            <>
            <div className='pageHeader'>
              <div className='usernameDisplay'>
                  {<UsernameDisplay/>}
              </div>
              <div className='navbar'>
                
                
                <Link to="/">Recents</Link>
                
                <Link to="/popular">Popular</Link>
               
                <LoginChangeUserDisplay/>
                
              </div>
              <div>
                <p className='pageTitle'>Create New Post</p>
              </div>
            </div>
            
          
          <Create />
          </>
          } />


          <Route path="/popular" element={
            <>
            <div className='pageHeader'>
              <div className='usernameDisplay'>
                  {<UsernameDisplay/>}
              </div>
              <div className='navbar'>
                
                
                <Link to="/create">New Post</Link>
                
                <Link to="/">Recents</Link>
                
                <LoginChangeUserDisplay/>
                
              </div>
              <div>
                <p className='pageTitle'>Top Posts</p>
              </div>
            </div>
            
          
          <TopFeed />
          </>
          } />


          <Route path="/login" element={
            <>
            <div className='pageHeader'>
              <div className='usernameDisplay'>
                  {<UsernameDisplay/>}
              </div>
              <div className='navbar'>
                
                
                <Link to="/"><GuestOrReturnHome/></Link>
                <Link to="/signup">SignUp</Link>
                
                
              </div>
              <div>
                <p className='pageTitle'>Login</p>
              </div>
            </div>
            
          
          <Login/>
          </>
          }/>


          <Route path="/signup" element={
            <>
            <div className='pageHeader'>
              <div className='usernameDisplay'>
                  {<UsernameDisplay/>}
              </div>
              <div className='navbar'>
                
                
                <Link to="/"><GuestOrReturnHome/></Link>
                
                <Link to="/login">Login</Link>
                
                
              </div>
              <div>
                <p className='pageTitle'>Create an Account</p>
              </div>
            </div>
            
          
          <SignUp/>
          </>
          }/>

          <Route path="/privacy" element={
            <PrivacyPolicy />
          }/>

          <Route path="/about" element={
            <About />
          }/>

          <Route path="*" element={<PageNotFound />} />
          
        </Routes>

      </Router>
    </div>
    </FeedContext.Provider>
  );
}

export default App;
