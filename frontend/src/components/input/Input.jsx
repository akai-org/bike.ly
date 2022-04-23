import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({ className, value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames(className)}
    />
  );
};

export default Input;
