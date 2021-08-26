import React, { Component } from "react";
import storeContext from "./storecontext";

class GlobalState extends Component {
  state = {
    cart: [],
  };
  render() {
    return (
      <storeContext.Provider
        value={{
          cart: this.state.cart,

          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
        }}
      >
        {this.props.children}
      </storeContext.Provider>
    );
  }

  addProductToCart = (product) => {
    let currentCart = [...this.state.cart]; //hard copy array
    currentCart.push(product);
    this.setState({ cart: currentCart });
  };

  removeProductFromCart = (productId) => {
    // opt 1 new arry
    //let newKart = [];
    //for(let i=0; i< copt.lenght; i++) {
    //    let item = copy[0];
    //    if(item._id !=produvtId) {
    //        newKart.push(item);
    //    }
    //}
    //this.setState({ kart:newKart });

    //opt 2 - removing from array
    //for(let i=0; i< copt.lenght; i++) {
    //    let item = copy[i];

    //    if (itrm._id === productId) {
    //       copy.splice(i,1);
    //       break;
    //    }
    // }
    //this.setState({ kart= Kopy });

    let kopy = this.state.vart.filter((prod) => prod._id !== productId);
    this.setState({ kart: kopy });

    console.log("TODO: remove Product");
  };
}

export default GlobalState;
