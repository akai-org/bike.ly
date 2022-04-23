import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



const Map = ({ defaultLocation, setFinishStation }) => {

  const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
          console.log("x");
          setFinishStation([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
  };

  const handleClick = e => {
    console.log([e.latlng.lat, e.latlng.lng]);
    setFinishStation([e.latlng.lat, e.latlng.lng]);
  }

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={defaultLocation}
        zoom={16}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onClick={handleClick}
    >
      <LocationFinderDummy />
      <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={defaultLocation}
      draggable={true}
      >
        <Popup >
            Popup for any custom information.
        </Popup>

        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map