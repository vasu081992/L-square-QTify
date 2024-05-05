import React from "react"
import {useState} from "react"
import styles from "./Carousel.module.css"
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CarouselLeftNavigation from "./LeftArrow";
// import CarouselRightNavigation from "./RightArrow";
import {useRef ,useEffect} from "react"
// import {CarouselLeftNavigation1} from "./LeftArrow";
// import {CarouselRightNavigation1} from "./RightArrow";
import BasicTabs from "../Tabs/Tabs";


const Carousel =({data,type})=>{

    const sliderRef=useRef(null)
    const sliderRef1=useRef(null)

    useEffect(()=>{
        console.log("sliderref",sliderRef.current)
        })

 console.log("Carousel comp",data)

    const settings = {
        dots:false,
        infinite: false,
        speed:500,
        slidesToShow: 5,
        slidesToScroll:1,
        // nextArrow: <CarouselLeftNavigation />,
        // prevArrow: <CarouselRightNavigation />,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }      
        // const handleLeftButtonClick = () => {
        //     sliderRef.current.slickPrev();
        //     console.log("button clicked");
     
        // };

        // const handleRightButtonClick = () => {
        //     sliderRef.current.slickNext();
        //     console.log("button clicked");
     
        // };

        // const handleLeftButtonClick1 = () => {
        //     sliderRef1.current.slickPrev();
        //     console.log("button clicked");
     
        // };

        // const handleRightButtonClick1 = () => {
        //     sliderRef1.current.slickNext();
        //     console.log("button clicked");
     
        // };


return (
<div className={styles.margin}  >

   {data.length>0 && (
    <>   
    {/* <CarouselLeftNavigation onClick={handleLeftButtonClick} /> */}
   <Slider {...settings} ref={sliderRef}> 
   {data.map((album)=>(
    <div>
      <Card key ={album.id} data={album} type={type}/>
    </div>
    ))}
    </Slider>
</>
   )
}
</div> 
)
}
export default Carousel