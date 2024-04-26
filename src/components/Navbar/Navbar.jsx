import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css"
import Search from "../SearchBar/search";
import Button from "../Button/Button";



const Navbar = () =>{

    const text="Give feedback"
return(

    <div className={styles.nav}>

    <Logo/>

    <Search/>
  
    <Button text={text}/>
    
    </div>
       
)


}

export default Navbar