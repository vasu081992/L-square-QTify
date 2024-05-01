import React from "react"
import axios from "axios"
import {useEffect,useState} from "react"
import Card1 from "../Card/Card"
import Grid from '@mui/material/Grid';
import styles from "./Section.module.css"
import Carousel from "../Carousel/Carousel";



const Section =()=>{

    const [albums,setalbums] = useState([])

    const [newalbums,setNewalbums] = useState([])

    const [collapse,setcollapse] = useState(false)

    const [newcollapse,setnewcollapse] = useState(false)

    const [swiper,setswiper] = useState(true)

    const [swipernew,setswipernew] = useState(true)


    console.log("albums",albums)


useEffect(()=>{


    const apiFetch = async()=>{
 
        try{
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
 
     const data =  response.data

     const response1 = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
 
     const data1 =  response1.data
    

      setalbums(data)
      setNewalbums(data1)

        }
        catch(e){
            console.log("Error in fetching",e)
        }
      

    }
    apiFetch()

},[])

function Collapse(){
setcollapse(!collapse)
setswiper(!swiper)
}

function Collapse1(){
    setnewcollapse(!newcollapse)
    setswipernew(!swipernew)
    }

return (
    <div className={styles.section}>
        <div className={styles.top}> 
    <p className={styles.title}> Top Albums </p>
    {!collapse?
    <button className={styles.button} onClick={Collapse}> Show all</button>
     :
    <button className={styles.button} onClick={Collapse}>Collapse</button>
}
    </div>
 <Grid container spacing={2}>
{albums.length>0 && !swiper &&

albums.map((album)=>(
<Card1 key ={album.id} image={album.image} label={`${album.follows} Follows`} name={album.title}/>
))

}
</Grid>
{
    swiper && (
        <Carousel albums={albums} newalbums=""/>
    )
}
<div className={styles.horizontalline} />

<div className={styles.top}> 
    <p className={styles.title}> New Albums </p>
    {!newcollapse?
    <button className={styles.button} onClick={Collapse1}>Show all</button>
     :
    <button className={styles.button} onClick={Collapse1}>Collapse</button>
}
    </div>

<Grid container spacing={2}>
{newalbums.length>0 && !swipernew &&

newalbums.map((album1)=>(
<Card1 key ={album1.id} image={album1.image} label={album1.follows}Follows name={album1.title}/>
))

}
</Grid>

{
    swipernew && (
        <Carousel newalbums={newalbums} albums=""/>
    )
}

 </div>
    )
}

export default Section