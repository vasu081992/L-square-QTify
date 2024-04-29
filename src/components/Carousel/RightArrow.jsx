
import   RightArrow  from "../../assets/Right.png";
import styles from "./Carousel.module.css"

import React from "react"

function CarouselRightNavigation({onClick}) {


    return (
        <div className={styles.imagepos2} >
      <img src={RightArrow} alt="Right Arrow" onClick={onClick}  />
        </div>
      );



}

export default CarouselRightNavigation