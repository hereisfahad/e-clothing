import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CartProvider from "./providers/cart/cart.provider";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
