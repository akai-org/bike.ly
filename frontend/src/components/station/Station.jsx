import styles from './Station.module.css'
import { Button } from "@mui/material";
// import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { IoNavigateCircleSharp } from "react-icons/io5";

const Station = ({title, name, station, bikes, lng, lat}) => {

    const mapsLink = `https://www.google.com/maps/?q=${lat},${lng}`;

  return (
    <div className={styles.station}>
        <h3>{title}</h3>
        <p>Stacja {name}</p>
        <p>Ilość rowerów: {bikes}</p>
        <div className={styles.navigate}>
          <Button variant="contained" href={mapsLink} target="_blank" endIcon={<IoNavigateCircleSharp/>}>
            Nawiguj
          </Button>
        </div>
        
    </div>
  )
}

export default Station