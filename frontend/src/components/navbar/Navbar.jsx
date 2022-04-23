import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Navbar.module.css";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({ search }) => {
  const [destination, setDestination] = useState("");

  return (
    <div className={styles.container}>
      <h1>bikely</h1>

      <div className={styles.search}>
        <TextField
            variant="outlined"
            label="Gdzie chcesz jechać?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={classNames(styles.input)}
            />
            <IconButton onClick={() => search(destination)}>
                <AiOutlineSearch className={classNames(styles.icon)}/> 
            </IconButton>
        </div>
    </div>
  );
};

export default Navbar;
