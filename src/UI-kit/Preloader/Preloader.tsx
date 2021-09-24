import React from "react";
import styles from "./Preloader.module.css";
import loader from "./../../assets/images/puff.svg";

export const Preloader = () => {
    return <img src={loader} alt="loading" />;
};
