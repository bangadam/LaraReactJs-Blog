import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import unslug from 'unslug';

class Posts extends Component {
    render() {
        const id = this.props.value.id;
        const title = this.props.value.title;
        var date = Moment(this.props.value.created_at).format('D MMMM YYYY');
        return (
            <div>
            <div className="post-preview">
                <Link to={title+'/read'}>
                    <h2 className="post-title">
                    {unslug(this.props.value.title)}
                    </h2>
                </Link>
                <h3 className="post-subtitle">
                    {this.props.value.descriptions.substring(0, 100)} {this.props.value.descriptions.length < 100 ? ' ' : '...'}
                </h3>
                
                <p className="post-meta">Posted by
                <a href="#"> Start Bootstrap </a>
                on {date}</p>
            </div>
            <hr />
            </div>
        )
    }
}

export default Posts;