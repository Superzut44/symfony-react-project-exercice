import React, {Component} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Users from './Users';
import Posts from './Posts';
import Clients from './Clients';
import ClientInformations from './ClientInformations';

class Roads extends Component {
    render() {
        return(
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/" element={<Navigate replace to="/users" />} />
                <Route path="/client/:id" element={<ClientInformations />} />
            </Routes>
        )
    }
}

export default Roads;