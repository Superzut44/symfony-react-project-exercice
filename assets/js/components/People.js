import React, {Component} from 'react';
import axios from 'axios';
    
class People extends Component {
    constructor() {
        super();
        this.state = { people: [], loading: true};
    }
    
    componentDidMount() {
        this.getPeople();
    }
    
    getPeople() {
       axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
       axios.get(`https://127.0.0.1:8000/api/people`).then(people => {
           this.setState({ people: people.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of people</span>Created with <i
                                className="fa fa-heart"></i> by yemiwebby</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.people.map(person =>
                                    <div className="col-md-10 offset-md-1 row-block" key={person.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={person.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{person.name}</h4>
                                                        <p>{person.description}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Contact Now</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </>
        )
    }
}
export default People;
