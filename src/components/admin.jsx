import React, { Component } from 'react';

import "./admin.css";
import ItemService from '../services/itemservice';

class Admin extends Component {
    state = {
        title: "",
        category: "",
        price: "",
        image: 0,
        minimum: 0,
        weight: 0,

        showAlert: false,
    };    
    render() { 
        let alertStatus = this.state.showAlert ? "" : "hide";
        return (
             <div className="admin-page">
            <h3>Register Budd</h3>

            {/* this.state.showAlert ? <div> bowl ready </div>*/}
            <div id="test" className={"alert alert-success " + alertStatus}>
                Rolled..
            </div>
            <div className="my-control">
                <lable>Title</lable>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
            </div>

            
            <div className="my-control">
                <lable>Category</lable>
                <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange} />
            </div>

            
            <div className="my-control">
                <lable>Price</lable>
                <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <lable>Image</lable>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <lable>Minimum</lable>
                <input type="number" name="minimum" value={this.state.minimum} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <lable>Weight</lable>
                <input type="number" name="weight" value={this.state.weight} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <button onClick={this.handleSave} className="btn btn-dark">
                    Register 'Budd'
                </button>
            </div>        
        </div>);
    }
  


  handleInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
  };

  handleSave = async () => {
// create an object
    let item = { ...this.state };
    item.price = item.price * 1;
    item.stock = +item.stock;
    item.minimum = parseInt(item.minimum);
    console.log(item);

    //send object to a service
    let service = ItemService();
    await service.saveItem(item);

// clear capture form
    this.setState({ title: "", category: "", price: 0, image: "", minimum: 0, weight: 0, showAlert: true });

// set a time out and hide the alert
setTimeout(() => {
    this.setState({ showAlert: false });
    } ,3500);
    
    
  };

}
export default Admin;