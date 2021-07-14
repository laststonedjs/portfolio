import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="home-container">
                <div className="header-text">
                    <h1>Welcome to my Portfolio!</h1>
                    <p>This is Filip! Frontend JavaScript Developer</p>

                </div>
                <div className="head-btns">
                <Link to="/about" className="btn btn-white">
                    <p className="btn-text">More about me!</p>
                </Link>
                </div>
            </div>
        );
    }
}

export default Home;