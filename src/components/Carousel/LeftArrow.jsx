import  LeftArrow  from "../../assets/Left.png";
import styles from "./Carousel.module.css"

import React from "react"

function CarouselLeftNavigation({onClick}) {


    return (
        <div className={styles.imagepos} >
      <img src={LeftArrow} alt="Left Arrow" onClick={onClick} />
        </div>
      );



}

export default CarouselLeftNavigation


function CarouselLeftNavigation1({onClick}) {


    return (
        <div className={styles.imagepos11} >
      <img src={LeftArrow} alt="Left Arrow" onClick={onClick} />
        </div>
      );



}

export { CarouselLeftNavigation1 }