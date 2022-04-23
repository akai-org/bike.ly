import styles from './Statistics.module.css'

const Station = ({title, name, station, bikes, lng, lat}) => {

    const mapsLink = `https://www.google.com/maps/?q=${lat},${lng}`;

  return (
    <div className={styles.station}>
        <p>Wynik CO2 Twojego pojazdu jest PONIŻEJ mediany dla pojazdów tego typu</p>
        <p>Ograniczyłeś emisję o 190g na każdym kilometrze swojej podróży!</p>
    </div>
  )
}

export default Station