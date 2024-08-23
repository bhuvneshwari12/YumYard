import React, { Fragment } from "react";
import classes from  './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import Carousel from "react-bootstrap/Carousel";
import picture1 from '../Assests/Meal.jpg'
import picture2 from '../Assests/copy5.jpg'
import picture3 from "../Assests/copy6.jpg";
import Navbar from "./NavBar";
import { SiIfood } from "react-icons/si";



const Header = (props) => {
  return (
    <Fragment>

      {/* HEADER , NAVBAR AND HEADER CART BUTTON */}
      <header className={classes.header}>
      <Navbar/>
      <HeaderCartButton cartShowHandler={props.cartShowHandler} />
 
      </header>

    
     </Fragment>
  );
};

export default Header;
