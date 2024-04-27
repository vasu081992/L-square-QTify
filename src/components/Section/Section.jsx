import React from "react"
import axios from "axios"
import {useEffect,useState} from "react"
import Card1 from "../Card/Card"
import Grid from '@mui/material/Grid';
import styles from "./Section.module.css"



const Section =()=>{

    const [albums,setalbums] = useState([])

    console.log("albums",albums)


useEffect(()=>{


    const apiFetch = async()=>{
 
        try{
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
 
     const data =  response.data
       
      console.log("data",data)

      setalbums(data)
        }
        catch(e){
            console.log("Error in fetching",e)
        }
      

    }
    apiFetch()

},[])


return (
    <div className={styles.section}>
        <div className={styles.top}> 
    <p className={styles.title}> Top Albums </p>
    <button className={styles.button}> Collapse All</button>
    </div>
 <Grid container spacing={2}>
{albums.length>0 &&

albums.map((album)=>(
<Card1 key ={album.id} image={album.image} label={album.follows}Follows name={album.title}/>
))

}
</Grid>
 </div>
    )
}

export default Section