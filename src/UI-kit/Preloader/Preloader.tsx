import React from "react";
import styles from "./Preloader.module.css";
import loader from "./../../assets/images/three-dots.svg";

export const Preloader = () => {
    return <img className={styles.loader} src={loader} alt="loading" />;
};
