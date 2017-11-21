import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            github: 'https://github.com/bangadam',
            facebook: 'https://facebook.com/bangadam.dev'
        }
    }
    render() {
        var color = {
            color: "red"
        }
        return (
            <footer>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                        <a href={this.state.facebook} target="_blank">
                            <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href={this.state.github} target="_blank">
                            <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        </li>
                    </ul>
                    <p className="copyright text-muted">Developed With <i className="fa fa-heart" style={color}></i> From Mojokerto</p>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;