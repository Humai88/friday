import React from "react";
import s from "./Error404.module.css";

export const ErrorPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.errorCode}>404</div>
      <div className={s.errorText}>There is nothing to do here...</div>
      <img
        src="https://www.seekpng.com/png/full/359-3590327_shopify-stores-sad-robot-shopify.png"
        alt="robot"
        className={s.errorImg}
      />
    </div>
  );
};
