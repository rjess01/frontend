import React, { Component } from 'react'; //imrc
import storeContext from '../store/storecontext';
import "./navBar.css";
import { Link } from "react-router-dom";
//cc
class NavBar extends Component {
  static contextType = storeContext;
  state = {};
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroudnColor: "000000"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/#">LeafLine
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">BUDD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/merchendise
          ">LL Merchendise</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link className="btn btn-outline-primary" href="/cart">
          <i className="fa fa-cart-plus mr1"></i>
          &nbsp;Review Kart &nbsp;&nbsp;
          <span className="badge bg-dark ml-1">{this.context.cart.length}</span>
        </Link>
      </form>
    </div>
  </div>
</nav>
        )

    }
    test() {
        console.log("this is a test");
    }
}
 
export default NavBar;

