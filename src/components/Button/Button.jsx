import React from "react";
import styles from "./Button.module.css"
//import logo from "../assets/logo.png"

const Button = ({text}) =>{

return(

<div>
<button className={styles.button}>{text}</button>

</div>


)

}

export default Button