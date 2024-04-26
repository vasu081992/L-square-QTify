import React from "react";
import styles from "./search.module.css"
//import logo from "../assets/logo.png"
import searchButton from "../../assets/Search_icon.svg"

const Search = () =>{

return(

<div>

<input placeholder="Search a album of your choice" className={styles.search}/>
<img src={searchButton} alt="search-button" className={styles.button}/>

</div>


)

}

export default Search