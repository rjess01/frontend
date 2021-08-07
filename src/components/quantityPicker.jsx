import React, { Component } from 'react';

import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {
        quantity: 1
      }


    render() { 
        return ( 

            <div className="quantity-picker">
                <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>
                { this.state.quantity }
                <button onClick={this.increase}className="btn btn-sm btn-primary">+</button>
            </div>

         );
    }

    decrease = () => {
            let qnty = this.state.quantity - 1;// read the state
            if(qnty > -6) { // for the secret menu
                this.setState({ quantity: qnty });
                this.props.onChange(qnty);
        }
    };

    increase = () => {
            let qnty = this.state.quantity + 1;// read the state
            if(qnty < 6) { //cap for purchase
            this.setState({ quantity: qnty });
            this.props.onChange(qnty);
        }

    }
}

export default QuantityPicker;

//button to get user who is under 18 kickedout 


