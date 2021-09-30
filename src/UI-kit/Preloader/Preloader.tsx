import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import loader from "./../../assets/images/puff.svg";
import styles from "./Preloader.module.css";

export const Preloader = () => {
    const portalElement = document.getElementById("overlays");
    return (
        <Fragment>
            {portalElement &&
                ReactDOM.createPortal(
                    <div className={styles.backdrop}>
                        <img
                            className={styles.img}
                            src={loader}
                            alt="loading"
                        />
                    </div>,
                    portalElement
                )}
        </Fragment>
    );
};

// {
//   <img className={styles.img} src={loader} alt="loading" />
// }
