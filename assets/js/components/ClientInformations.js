import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from 'react-bootstrap';
import CurrentAge from '../services/CurrentAge';

export default function ClientInformations() {

    let { id } = useParams();
    const [client, setClient] = useState([]);
    const [possessions, setPossessions] = useState([]);

    useEffect(() => {
        axios
        .get(`https://localhost:8000/client/${ id }`)
        .then((resp) => {
            setClient(resp.data);
            setPossessions(resp.data.possessions);
        });
    }, []);

    return <>
            <section className="row-section">
                 <div className="container">
                 <div className="row">
                    <h2 className="text-center"><span>Client informations</span></h2>
                </div>
                    { !client.name ? (
                        <div className={'row text-center'}>
                            <span className="fa fa-spin fa-spinner fa-4x"></span>
                        </div>
                    ) : (
                        <div className={'row'}>
                            <div className="col-lg offset-md-1 row-block">
                                <Table>
                                    <thead>
                                        <tr>
                                        <th>Name</th>
                                        <th>Firstname</th>
                                        <th>Email</th>
                                        <th>Adress</th>
                                        <th>Phone</th>
                                        <th>Age</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>{client.name}</td>
                                    <td>{client.firstname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.adress}</td>
                                    <td>{client.phone}</td>
                                    <td>{ CurrentAge(client.birthDate) }</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                        </div>
                    )}
                    <div className={'row'}>
                        <div className="col-lg offset-md-1 row-block">
                            <Table>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                    <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { possessions.map((possession, index) =>
                                    <tr key={index}>
                                    <td>{possession.name}</td>
                                    <td>{possession.value}</td>
                                    <td>{possession.type}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                 </div>
             </section>
        </>
}