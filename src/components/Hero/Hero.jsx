import React from "react";
import styles from "./Hero.module.css"
//import logo from "../assets/logo.png"
import headphone from "../../assets/vibrating-headphone1.png"

const Hero = () =>{

return(

<div className={styles.bgimage}>

<img src={headphone} alt="headphones" className={styles.headphone}/>

<p className={styles.text}>100 Thousand Songs, ad-free</p>

<p className={styles.text2}>Over thousands podcast episodes</p>

</div>


)

}

export default Hero