import ReactDOM from "react-dom"; 
import './index.css';
import App from './App'; 
import CartProvider from "./Store/CartProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename='/YumYard'>
    <CartProvider>
      <App/>
    </CartProvider>
  </BrowserRouter>,   
  document.getElementById('root')
);
