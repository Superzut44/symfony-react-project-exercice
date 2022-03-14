import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';
    
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
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/clients"}> Clients </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
           </>
        )
    }
}

export default Home;
