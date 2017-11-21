import React, { Component } from 'react';
import Footer from './Footer';
import axios from 'axios';

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            descriptions: '',
        }

    }

    onSubmit(e) {
        e.preventDefault();
        const {title, descriptions} = this.state;
        axios.post('api/create-new-post',  
            {title, descriptions}
        ).then(response => {
            this.props.history.push('/');
        }).catch(error => {
            console.log('error');
        })

    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        var bg = {
            backgroundImage: "url('blog/img/about-bg.jpg')"
        }
        return (
            <div>
                <header className="masthead" style={bg}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Create New Post</h1>
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
                                <h3 className="panel-title">Create New Post</h3>
                                </div>
                                <div className="panel-body">
                                <form method="post" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name="title" onChange={this.onChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Descriptions</label>
                                        <textarea className="form-control" name="descriptions" onChange={this.onChange.bind(this)} style={{height: '200px'}}></textarea>
                                    </div>
                                    <button className="btn btn-block btn-primary">Create Post</button>
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

export default CreatePost;