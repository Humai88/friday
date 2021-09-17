import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
      <NavLink to={"/password-update"}>Update Password</NavLink>
      <NavLink to={"/password-recovery"}>Recover Password</NavLink>
      <NavLink to={"/error-page"}>ErrorPage</NavLink>
    </header>
  );
};
