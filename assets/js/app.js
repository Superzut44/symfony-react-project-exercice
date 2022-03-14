import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '../styles/app.css';
import Home from './components/Home';
import Roads from './components/Roads';

ReactDOM.render(<BrowserRouter><Home /><Roads /></BrowserRouter>, document.getElementById('root'));
