import React from "react"
import {useState} from "react"
import styles from "./Carousel.module.css"
import Card1 from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLeftNavigation from "./LeftArrow";
import CarouselRightNavigation from "./RightArrow";
import {useRef ,useEffect} from "react"
import {CarouselLeftNavigation1} from "./LeftArrow";
import {CarouselRightNavigation1} from "./RightArrow";


const Carousel =({albums,newalbums})=>{

    const sliderRef=useRef(null)
    const sliderRef1=useRef(null)

    useEffect(()=>{
        console.log("sliderref",sliderRef.current)
        })

 

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

   {albums.length>0 && (
    <>   
    {/* <CarouselLeftNavigation onClick={handleLeftButtonClick} /> */}
   <Slider {...settings} ref={sliderRef}> 
   {albums.map((album)=>(
    <div>
      <Card1 key ={album.id} image={album.image} label={album.follows}Follows name={album.title}/>
    </div>
    ))}
    </Slider>
{/* <CarouselRightNavigation onClick={handleRightButtonClick} /> */}
</>
   )
}
{newalbums.length>0 && (
        <>   
        {/* <CarouselLeftNavigation1 onClick={handleLeftButtonClick1} /> */}
        <Slider {...settings} ref={sliderRef1}> 
{newalbums.map((album1)=>(
    <div>
      <Card1 key ={album1.id} image={album1.image} label={album1.follows}Follows name={album1.title}/>
    </div>
    ))}
   </Slider>
{/* <CarouselRightNavigation1 onClick={handleRightButtonClick1} /> */}
</>
   )
}
</div> 
)
}
export default Carousel