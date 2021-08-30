import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.css";
class Home extends Component {
    render() { 
        return ( 
            <div className="home-page">
                <h1> Welcome To Leaf Line</h1>
                <Link className="btn btn-info btn-lg" to="/catalog">Check out our catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></Link>

            </div>
         );
    }
}
 
export default Home;