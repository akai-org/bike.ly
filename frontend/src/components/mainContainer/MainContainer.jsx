import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar, Station, End, CarSettings, Map, Statistics } from "../"

const MainContainer = ({}) => {

  const defaultUserLocation = [52.4064, 16.9252];
  const defaultFinishLocation = [52.4021343, 16.9481105]

  const [userLocation, setUserLocation] = useState(defaultUserLocation);

  const [startStation, setStartStation] = useState(null);
  const [finishStation, setFinishStation] = useState(null);

  navigator.geolocation.getCurrentPosition((userPosition, error) => {
    if (!error) setUserLocation([userPosition.coords.latitude, userPosition.coords.longitude])
  });

  const findFinishStation = userInput => {
    axios({
      method: 'get',
      url: `http://localhost:3001/stations`,
      withCredentials: false,
      params: {
        lat: defaultFinishLocation[0],
        lng: defaultFinishLocation[1],
        limit: 5
      },
    })
    .then(res => {
      if (res.data.length) setFinishStation(res.data[0]);
      else console.log("Finish station not found");
    })
  }

  const findFinishStationCoords = coords => {
    axios({
      method: 'get',
      url: `http://localhost:3001/stations`,
      withCredentials: false,
      params: {
        lat: coords[0],
        lng: coords[1],
        limit: 5
      },
    })
    .then(res => {
      if (res.data.length) setFinishStation(res.data[0]);
      else console.log("Finish station not found");
    })
  }

  const handleMapClick = coords => {
    setFinishStation(coords);
    findFinishStationCoords(coords);
  }

  useEffect(() => {
    // Get start station
    axios({
      method: 'get',
      url: `http://localhost:3001/stations`,
      withCredentials: false,
      params: {
        lat: userLocation[0],
        lng: userLocation[1],
        limit: 5
      },
    })
    .then(res => {
      if (res.data.length) setStartStation(res.data[0]);
      else console.log("Start station not found");
    })
  }, []);

  return (
    <>
        <Navbar search={findFinishStation} />
        { startStation && <Station {...startStation} title={"Stacja początkowa"} /> }
        <Map defaultLocation={userLocation} handleMapClick={handleMapClick} />
        { finishStation && <Station {...finishStation} title={"Stacja końcowa"} /> }
        { finishStation && <End title="Miejsce Docelowe" name="Centrum Wykładowe Politechniki Poznańskiej" lat={userLocation[0]} lng={userLocation[1]} />}
        { finishStation && <Statistics/>}
        <CarSettings />
    </>
  )
}

export default MainContainer