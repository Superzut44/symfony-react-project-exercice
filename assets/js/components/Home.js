import React, {Component} from 'react';
import {
    Routes,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
    
class Home extends Component {
    
    render() {
        return (
           <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                   {/* <Redirect exact from="/" to="/users" /> */}                 
                   <Route path="/" element={<Users />} />
                   <Route path="/users" element={<Users />} />
                   <Route path="/posts" element={<Posts />} />
               </Routes>
           </>
        )
    }
}
    
export default Home;
