import React, { Component } from 'react';
import Footer from './Footer';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        var bg = {
            backgroundImage: "url('https://images.pexels.com/photos/185343/pexels-photo-185343.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')"
        }
        return (
            <div>
                <header className="masthead" style={bg}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Register Page</h1>
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
                                <h3 className="panel-title">Register Form</h3>
                                </div>
                                <div className="panel-body">
                                <form method="post" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="username" onChange={this.onChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" onChange={this.onChange.bind(this)} />
                                    </div>
                                    <button className="btn btn-block btn-primary">Sign Up</button>
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

export default Register;