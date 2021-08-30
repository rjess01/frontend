import React, { Component } from 'react';
import storeContext from '../store/storecontext';
import IteminKart from './iteminKart';

import "./kart.css";

class Kart extends Component {
    static contextType = storeContext;
    state = {  };
    render() { 
        return ( 
        <div className="kart-page">
            <h1>Your items</h1>
            <h4>You have {this.context.kart.length} products in this bitch</h4>

        <div className="d-flex">
            <div className="kart-container">
                {this.context.kart.map((prod) => (
                    <IteminKart key={prod._id} data={prod}></IteminKart>
                ))}
            </div>

            <div className="total-container">
                <label>Sum:</label>
                <h6>$ {this.getTotal()}</h6>

                <button className="btn btn-primary"> Proceed to CheckOut</button>
            </div>
        </div>
    </div> 
      );
    }

    getTotal = () => {
        let total = 0;
        for (let i = 0; i < this.context.kart.length; i++) {
            let item = this.context.kart[i];
            total += item.price * item.quantity;
        }

        return total.toFixed(2);
    };
}
 
export default Kart;