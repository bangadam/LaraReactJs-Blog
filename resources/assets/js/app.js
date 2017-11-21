require('./bootstrap');

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ReadPost from './components/ReadPost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Register from './components/Register';

render(
    <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                 <a className="navbar-brand" href="/">LaraReactBlog</a>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/create-new-post">Create New Post</NavLink>
                        </li>
                        {/*<li className="nav-item">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register">Register</NavLink>
                        </li>*/}
                    </ul>
                </div>
             </div>
        </nav>

            <Route exact path="/" component={Home} />
            <Route path="/create-new-post" component={CreatePost} />
            <Route path="/:title/read" component={ReadPost} />
            <Route path="/:title/edit" component={EditPost} />
            {/*<Route path="/login" component={Login} />            
            <Route path="/register" component={Register} />*/}
            
        </div>
    </Router>
    
    ,document.getElementById('root'));

