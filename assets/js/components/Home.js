import React, {Component} from 'react';
import {
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import People from './People';
    
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
                               <Link className={"nav-link"} to={"/people"}> People </Link>
                           </li>
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                   <Route path="/users" element={<Users />} />
                   <Route path="/posts" element={<Posts />} />
                   <Route path="/people" element={<People/>} />
                   <Route path="/" element={<Navigate replace to="/people" />} />
               </Routes>
           </>
        )
    }
}

export default Home;
