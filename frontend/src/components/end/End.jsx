import styles from './End.module.css'
import { Button } from "@mui/material";

const End = ({title, name, station, bikes, lng, lat}) => {

    const mapsLink = `https://www.google.com/maps/?q=${lat},${lng}`;

  return (
    <div className={styles.station}>
        <h3>{title}</h3>
        <p>Cel: {name}</p>
        <Button variant="contained" href={mapsLink} target="_blank">
            Nawiguj
        </Button>
    </div>
  )
}

export default End