import React, {Component} from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import CurrentAge from '../services/CurrentAge';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
    
class Clients extends Component {
    constructor() {
        super();
        this.state = { clients: [], loading: true, modalShow: false};
    }
    
    componentDidMount() {
        this.getClients();
    }
    
    getClients() {
       axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
       axios.get(`/api/client`).then(clients => {
           this.setState({ clients: clients.data, loading: false})
       })
    }

    deleteClientById(id, event) {
        event.preventDefault();
        axios.delete(`/api/client/delete/`+ id).then(res => {
            this.getClients();
            const clientsUpdate = $this.getState.clients.filter(client => client.id !== id);
            $this.setState({clients: clientsUpdate});
        })
        .catch((error) => {
            console.log(error.response)
        });
    }

    changeModalShow(bool) {
        this.setState({modalShow: bool});
    }

    
    render() {
        const loading = this.state.loading;
        return(
            <>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of clients</span>Created with <i
                                className="fa fa-heart"></i> by xav</h2>
                        </div>
                        {loading ? (
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
                                        { this.state.clients.map(client =>
                                            <tr key={client.id}>
                                            <td><Link className={"link"} to={`/client/${client.id}`}>{client.name}</Link></td>
                                            <td>{ client.firstname }</td>
                                            <td>{ client.email }</td>
                                            <td>{ client.adress }</td>
                                            <td>{ client.phone }</td>
                                            <td>{ CurrentAge(client.birthDate) }</td>
                                            <td><Button as="input" type="reset" value="Reset" onClick={(event) => this.deleteClientById(client.id, event)}/></td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td>
                                                <Button variant="success" onClick={() => this.changeModalShow(true)}>New Client</Button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <MyVerticallyCenteredModal show={this.state.modalShow} onHide={() => this.changeModalShow(false)} />
            </>
        )
    }
}
export default Clients;
