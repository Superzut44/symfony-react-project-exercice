import React, {Component} from 'react';
import axios from 'axios';
    
class Users extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
       axios.get(`https://127.0.0.1:8000/users/api`).then(users => {
           this.setState({ users: users.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of users</span>Created with <i
                                className="fa fa-heart"></i> by xav</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                <div className="col-md-10 offset-md-1 row-block">
                                    <table striped bordered hover>
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
                                        { this.state.users.map(user =>
                                            <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.adress}</td>
                                            <td>{user.phone}</td>
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
export default Users;
