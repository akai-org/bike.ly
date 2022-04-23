import React, { useState } from "react";
import styles from "./CarSettings.module.css";
import Input from "./../input/Input";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";

const CarSettings = () => {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [fuel, setFuel] = useState("");
  const [capacity, setCapacity] = useState("")
  const [gearBox, setGearBox] = useState("")
  const [gearNum, setGearNum] = useState("")
  const [carType, setCarType] = useState("")

  return (
    <div className={styles.settings}>
      <InputLabel id="fuel-type">Typ paliwa</InputLabel>
      <Select
        labelId="fuel-type"
        id="fuel-select"
        label="Fuel"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
        fullWidth
        className={styles.input}
      >
        {names.map((el) => {
          return (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
      <TextField variant="outlined" label="Pojemność silnika" value={capacity} onChange={(e) => setCapacity(e.target.value)} fullWidth  className={styles.input}/>

      <InputLabel id="gearbox">Skrzynia biegów</InputLabel>
      <Select labelId="gearbox" id="gearbox-select" label="Skrzynia biegów" value={gearBox}
        onChange={(e) => setGearBox(e.target.value)}
        fullWidth className={styles.input}>
            {names.map((el) => {
          return (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          );
        })}
        </Select>
      <TextField variant="outlined" label="Liczba biegów" value={gearNum} onChange={(e) => setGearNum(e.target.value)} fullWidth  className={styles.input}/>
      <InputLabel id="carType">Rodzaj samochodu</InputLabel>
      <Select labelId="carType" id="carType-select" label="carType" value={carType}
        onChange={(e) => setCarType(e.target.value)}
        fullWidth className={styles.input}>
            {names.map((el) => {
          return (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          );
        })}
        </Select>
    </div>
  );
};

export default CarSettings;
