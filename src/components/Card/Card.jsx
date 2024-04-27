import React from "react";
import styles from "./Card.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import head from "../../assets/vibrating-headphone1.png"
import Chip from '@mui/material/Chip';


 const Card1 = ({image,label,name}) =>{

return(

<div className={styles.card}>
<Card sx={{ height:"205px",width:"159px"}}>
      <CardMedia
      image={image}
     className={styles.image}
     sx={{borderRadius:"10px 10px 0 0"}}
      />
<Chip label={label} className={styles.chip} sx={{backgroundColor:"black", color:"white",padding:"4px 8px 4px 8px", width:"95px", height:"23px", fontSize: "10px",fontFamily:"Poppins",fontWeight:"200",lineHeight:"15px",gap:"1px",borderRadius:"10px"}} />

    </Card>

<div className={styles.albumname}>{name}</div>
</div>


)

}

export default Card1