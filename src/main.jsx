// import React from "react";
// import App from "./App";
// import ReactDOM from "react-dom"
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <cartProvider>
//       <App />
//     </cartProvider>
//   </BrowserRouter>
// );
import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./stores/context/CardContext";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
