import React, {Component} from 'react';
import Footer from './Footer';
import unslug from 'unslug';
import Moment from 'moment';
import { Link } from 'react-router-dom';

class ReadPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            descriptions: '',
            created_at: ''
        }
    }

    componentDidMount() {
        const title = this.props.match.params.title;
        axios.get('/api/'+title+'/read').then((response) => {
            this.setState({title: response.data.title, descriptions: response.data.descriptions, created_at: response.data.created_at, id: response.data.id});
        }).catch(error => {
            console.log(error);
        });
    }

    deletePost(e) {
        e.preventDefault();
        const id = this.state.id;
        const title = this.state.title;

        axios.get('/api/'+title+"/"+id+"/delete").then((response) => {
            this.props.history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    // componentDidUpdate() {
    //     const title = this.props.match.params.title;
    //     axios.get('/api/'+title+'/read').then((response) => {
    //         this.setState({title: response.data.title, descriptions: response.data.descriptions, created_at: response.data.created_at});
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }
    

    render() {
        var bg = {
            backgroundImage: "url('https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')"
        }
        var date = Moment(this.state.created_at).format('D MMMM YYYY');
        return (
            <div>
                <header className="masthead" style={bg}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{unslug(this.state.title)}</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                        </div>
                    </div>
                </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-preview">
                                <p className="post-subtitle">
                                    {this.state.descriptions}
                                </p>
                                
                                <p className="post-meta">Posted by
                                <a href="#"> Start Bootstrap </a>
                                on {date}</p>
                            </div>
                            <hr />
                            <div className="col-lg-4 col-md-12 mx-auto">
                                <label>Actions</label>
                                <br />
                                <Link to="edit" className="btn btn-warning">Edit</Link>
                                <a className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default ReadPost;