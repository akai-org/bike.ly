import React, { useState, useEffect } from "react";
import styles from "./CarSettings.module.css";
import Input from "./../input/Input";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

const CarSettings = () => {
  let producer = ["Renult", "Mercedes", "Ford"];
  const oilTypes = ["Benzyna", "Diesel", "Gaz"];
  const manualOrAuto = ["Automat", "Manualna"];
  const autoType = ["dostawczy", "kompaktowy"];

  const [fuel, setFuel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [gearBox, setGearBox] = useState("");
  const [gearNum, setGearNum] = useState("");
  const [carType, setCarType] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/producer`,
      withCredentials: false,
    }).then((res) => {
      producer = res.data;
    });
    axios({
      method: "get",
      url: `http://localhost:5000/fuel`,
      withCredentials: false,
    }).then((res) => {
      oilTypes = res.data;
    });
    axios({
      method: "get",
      url: `http://localhost:5000/transmission`,
      withCredentials: false,
    }).then((res) => {
      gearBox = res.data;
    });
    axios({
      method: "get",
      url: `http://localhost:5000/producer`,
      withCredentials: false,
    }).then((res) => {
      gearNum = res.data;
    });
  }, []);

  return (
    <div className={styles.settings}>
      <FormControl fullWidth>
        <InputLabel id="fuel-type">Typ paliwa</InputLabel>
        <Select
          labelId="fuel-type"
          id="fuel-select"
          label="Fuel"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          fullWidth
        >
          {oilTypes.map((el) => {
            return (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          label="Pojemność silnika"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="gearbox">Skrzynia biegów</InputLabel>
        <Select
          labelId="gearbox"
          id="gearbox-select"
          label="Skrzynia biegów"
          value={gearBox}
          onChange={(e) => setGearBox(e.target.value)}
        >
          {manualOrAuto.map((el) => {
            return (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          label="Liczba biegów"
          value={gearNum}
          onChange={(e) => setGearNum(e.target.value)}
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="carType">Rodzaj samochodu</InputLabel>
        <Select
          labelId="carType"
          id="carType-select"
          label="carType"
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          fullWidth
        >
          {autoType.map((el) => {
            return (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CarSettings;
