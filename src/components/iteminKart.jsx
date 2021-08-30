import React, { Component } from "react";
import storeContext from "../store/storecontext";
import "./iteminKart.css";

class IteminKart extends Component {
  static contextType = storeContext;
  state = {};
  render() {
    return (
      <div className="item-in-Kart">
        <img src={"/images/products" + this.props.data.image} alt=""></img>
        <div className="item-info">
          <h6>{this.props.data.title}</h6>
          <lable>{this.props.data.category}</lable>
        </div>
        <lable>${this.props.data.price}</lable>
        <lable>{this.props.data.quantity}</lable>
        <lable>{this.getTotal()}</lable>
        <button onClick={this.handleDelete} className=" btn btn-sm btn-danger">
          Remove
        </button>
        nmkj
      </div>
    );
  }

  handleDelete = () => {
    this.context.removeProductFromKart(this.props.data._id);
  };

  getTotal = () => {
    return (this.props.data.price * this.props.data.quantity).toFixed(2);
  };
}

export default IteminKart;
