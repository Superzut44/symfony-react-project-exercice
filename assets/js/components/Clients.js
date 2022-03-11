import React, {Component} from 'react';
import axios from 'axios';
    
class Clients extends Component {
    constructor() {
        super();
        this.state = { clients: [], loading: true};
    }
    
    componentDidMount() {
        this.getClients();
    }
    
    getClients() {
       axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
       axios.get(`/api/clients`).then(clients => {
           this.setState({ clients: clients.data, loading: false})
       })
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
                                <div className="col-md-10 offset-md-1 row-block">
                                    <table table-striped>
                                        <thead>
                                            <tr>
                                            <th>Name</th>
                                            <th>Firstname</th>
                                            <th>Email</th>
                                            <th>Adress</th>
                                            <th>Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { this.state.clients.map(client =>
                                            <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td>{client.firstname}</td>
                                            <td>{client.email}</td>
                                            <td>{client.adress}</td>
                                            <td>{client.phone}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </>
        )
    }
}
export default Clients;
