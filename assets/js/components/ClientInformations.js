import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
    
class ClientInformations extends Component {
    constructor() {
        super();
        this.state = { client: [], loading: true};
    }
    
    componentDidMount() {
        this.getClient();
    }
    
    getClient() {
       axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
       axios.get(`client/` + id).then(client => {
           this.setState({ client: client.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center">Client informations</h2>
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
                                            <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={this.state.client.id}>
                                            <td>{this.state.client.name}</td>
                                            <td>{this.state.client.firstname}</td>
                                            <td>{this.state.client.email}</td>
                                            <td>{this.state.client.adress}</td>
                                            <td>{this.state.client.phone}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </>
        )
    }
}
export default ClientInformations;
