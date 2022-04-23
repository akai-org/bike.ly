import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



const Map = ({ defaultLocation, handleMapClick }) => {

  const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
          handleMapClick([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
  };

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