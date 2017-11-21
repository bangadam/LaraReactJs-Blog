import React, { Component } from 'react';
import Footer from './Footer';
import unslug from 'unslug';


class EditPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            descriptions: ''
        }
    }

    componentDidMount() {
        const title = this.props.match.params.title;
        axios.get('/api/'+title+'/edit').then((response) => {
            this.setState({id: response.data.id, title: response.data.title, descriptions: response.data.descriptions});
        }).catch(error => {
            console.log(error);
        })
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmit(e) {
        e.preventDefault();
        const title = this.state.title, 
              id = this.state.id;

        axios.post('/api/'+title+'/'+id+'/update', {
            title: this.state.title,
            descriptions: this.state.descriptions
        }).then((response) => {
            this.props.history.push('/'+response.data.title+'/read');
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        var bg = {
            backgroundImage: "url('https://images.pexels.com/photos/179912/pexels-photo-179912.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')"
        }
        return (
            <div>
                <header className="masthead" style={bg}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Edit Post</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                        </div>
                    </div>
                </div>
                </header>
                
                {/* Create page */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                <h3 className="panel-title">Edit Post</h3>
                                </div>
                                <div className="panel-body">
                                <form method="post" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name="title" value={unslug(this.state.title)} onChange={this.onChange.bind(this)}/>
                                        <input type="hidden" value={this.state.id} />
                                    </div>
                                    <div className="form-group">
                                        <label>Descriptions</label>
                                        <textarea className="form-control" name="descriptions" value={this.state.descriptions} onChange={this.onChange.bind(this)} style={{height: '200px'}}></textarea>
                                    </div>
                                    <button className="btn btn-block btn-warning">Update Post</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <Footer />
            </div>
        )
    }
}

export default EditPost;