import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Card.module.css";
type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLInputElement
>;

export const Card: React.FC<DefaultDivPropsType> = ({
  className,
  children,
}) => {
  const finalClasses = `${styles.card} ${className ? className : ""}`;
  return <div className={finalClasses}>{children}</div>;
};
