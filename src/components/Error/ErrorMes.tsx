import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ErrorMes.module.css";
type DefaultDivPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLInputElement
>;

export const ErrorMes: React.FC<DefaultDivPropsType> = ({ children }) => {
    return <div className={styles.error}>{children}</div>;
};
