import React from 'react';
import About from "./pages/about"
import Fixtures from "./pages/fixtures"
import Footer from "./pages/footer.js"
import Home from "./pages/home"
import Policy from "./pages/policy"
import Signin from "./pages/signin"
import Forgetpw from "./pages/forgetpw.js"
import SignUp from "./pages/signup"
import Team from "./pages/team"
import Topbar from "./pages/topbar"
import Tournament from './pages/tournament'
import TeamInfo from './pages/teaminfo'
import Register from './pages/register.js'
import MatchInfo from './pages/matchinfo.js';

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
   
    <Router>
      <div>
        <Topbar />
        </div>
  <div>
        <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/fixtures" element={<Fixtures/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/policy" element={<Policy/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/forgetpw" element={<Forgetpw/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/teaminfo/:teamName" element={<TeamInfo/>}/> {/* Dynamic route for team info */}
              <Route path="/tournament" element={<Tournament/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/matchinfo" element={<MatchInfo/>}/>
            </Routes> 
            <div className='footer'>
            <Footer />
            </div>
    </div>
    </Router>
  );
}

export default App;
