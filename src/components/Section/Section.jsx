// import React from "react"
// import axios from "axios"
// import {useEffect,useState} from "react"
// import Card1 from "../Card/Card"
// import Grid from '@mui/material/Grid';
// import styles from "./Section.module.css"
// import Carousel from "../Carousel/Carousel";



// const Section =()=>{

//     const [albums,setalbums] = useState([])

//     const [newalbums,setNewalbums] = useState([])

//     const [collapse,setcollapse] = useState(false)

//     const [newcollapse,setnewcollapse] = useState(false)

//     const [swiper,setswiper] = useState(true)

//     const [swipernew,setswipernew] = useState(true)

//     const [songs,setsongs] = useState(false)

//    console.log("songs data",songs)
//     console.log("albums",albums)


// useEffect(()=>{


//     const apiFetch = async()=>{
 
//         try{
//     const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
 
//      const data =  response.data

//      const response1 = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
 
//      const data1 =  response1.data
    
//      const response2 = await axios.get('https://qtify-backend-labs.crio.do/songs')
 
//      const data2 =  response2.data
    
   
//       setalbums(data)
//       setNewalbums(data1)
//       setsongs(data2)

//         }
//         catch(e){
//             console.log("Error in fetching",e)
//         }
      

//     }
//     apiFetch()

// },[])

// function Collapse(){
// setcollapse(!collapse)
// setswiper(!swiper)
// }

// function Collapse1(){
//     setnewcollapse(!newcollapse)
//     setswipernew(!swipernew)
//     }

// return (
//     <div className={styles.section}>
//         <div className={styles.top}> 
//     <p className={styles.title}> Top Albums </p>
//     {!collapse?
//     <button className={styles.button} onClick={Collapse}> Show all</button>
//      :
//     <button className={styles.button} onClick={Collapse}>Collapse</button>
// }
//     </div>
//  <Grid container spacing={2}>
// {albums.length>0 && !swiper &&

// albums.map((album)=>(
// <Card1 key ={album.id} image={album.image} label={`${album.follows} Follows`} name={album.title}/>
// ))

// }
// </Grid>
// {
//     swiper && (
//         <Carousel albums={albums} newalbums="" songs=""/>
//     )
// }
// <div className={styles.horizontalline} />

// <div className={styles.top}> 
//     <p className={styles.title}> New Albums </p>
//     {!newcollapse?
//     <button className={styles.button} onClick={Collapse1}>Show all</button>
//      :
//     <button className={styles.button} onClick={Collapse1}>Collapse</button>
// }
//     </div>

// <Grid container spacing={2}>
// {newalbums.length>0 && !swipernew &&

// newalbums.map((album1)=>(
// <Card1 key ={album1.id} image={album1.image} label={album1.follows}Follows name={album1.title}/>
// ))

// }
// </Grid>

// {
//     swipernew && (
//         <Carousel newalbums={newalbums} albums="" songs=""/>
//     )
// }
// <div className={styles.horizontalline} />
// <p className={styles.title}> Songs </p>
// {songs.length>0 &&

// <Carousel newalbums="" albums="" songs={songs}/>


// }
//  </div>

//     )
// }

// export default Section





import { useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react"
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import styles from "./Section.module.css";
import BasicTabs from "../Tabs/Tabs";

function Section({
  title,
  data,
  type,
  value = 0,
  handleChange,
  filteredData = null,
  filteredDataValue = [],
}) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  function handleToggle() {
    setCarouselToggle(!carouselToggle);
  }

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h4>
      </div>

      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}

      {!data.length ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredDataValue.map((item) => (
                <Card key = {item.id} data={item} type={type}/>
              ))} 
            </div>
          ) : (
            <Carousel
              data={filteredDataValue} type={type}
            //   componentRender={(element) => <Card data={element} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;