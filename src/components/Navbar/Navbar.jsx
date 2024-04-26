import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css"
import Search from "../SearchBar/search";
import Button from "../Button/Button";



const Navbar = () =>{

return(

    <div className={styles.nav}>

    <Logo/>

    <Search/>
  
    <Button text="Give feedback"/>
    
    </div>
       
)


}

export default Navbar