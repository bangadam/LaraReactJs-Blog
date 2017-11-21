import React, { Component } from 'react';
import Footer from './Footer';

class Login extends Component {
    render() {
        var bg = {
            backgroundImage: "url('https://images.pexels.com/photos/185699/pexels-photo-185699.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')"
        }
        return (
            <div>
                <header className="masthead" style={bg}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Login Page</h1>
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
                                <h3 className="panel-title">Login Form</h3>
                                </div>
                                <div className="panel-body">
                                <form method="post">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control"/>
                                    </div>
                                    <button className="btn btn-block btn-primary">Sign In</button>
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

export default Login;