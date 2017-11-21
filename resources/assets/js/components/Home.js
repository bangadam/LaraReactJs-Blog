import React, { Component } from 'react';
import Posts from './Posts';
import Footer from './Footer';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: ''
        }
    }

    componentDidMount() {
        axios.get("api/get-all-post").then((response) => {
            // console.log(response);
            this.setState({posts: response.data})
        }).catch(error => console.log(error));
    }

    getAllPost() {
        if(this.state.posts instanceof Array) {
            return this.state.posts.map(function(value, key) {
                return <Posts value={value} key={key} />
            })
        }
    }

    render() {
        var bg = {
            backgroundImage: "url('blog/img/home-bg.jpg')"
        }
        return (
            <div>
            <header className="masthead" style={bg}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>ReactJs Blog</h1>
                        <span className="subheading">A Blog Theme by Start Bootstrap</span>
                    </div>
                    </div>
                </div>
            </div>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.getAllPost()}               
                        {/* <div className="clearfix">
                            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div> */}
                    </div>
                </div>
                <hr />

                <Footer />
            </div>

            </div>
        )
    }
}

export default Home;