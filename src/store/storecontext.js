import React from "react";

export default React.createContext({
    cart: [],

    addProductToCart: (product) => {},
    reamoveProductFromCart: (productId) => {},
});
