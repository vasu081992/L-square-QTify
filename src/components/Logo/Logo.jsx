import React from "react";
import {image1} from "../constants/constants.jsx";
import styles from "./Logo.module.css"
//import logo from "../assets/logo.png"

const Logo = () =>{

return(

<>

<img src={image1} alt="qtify logo" className={styles.logo} />

</>


)

}

export default Logo