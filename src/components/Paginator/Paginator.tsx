import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./Paginator.module.css";

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    const {
        currentItem,
        itemCount,
        totalItemCount,
        onChangeItemHandler,
        portionSize,
    } = props;
    let pagesCount = Math.ceil(totalItemCount / itemCount);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && (
                <FaAngleLeft
                    className={styles.icon}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    Previous
                </FaAngleLeft>
            )}

            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => {
                    return (
                        <span
                            key={p}
                            className={
                                currentItem === p ? styles.selectedPage : ""
                            }
                            onClick={() => {
                                onChangeItemHandler(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            {portionCount > portionNumber && (
                <FaAngleRight
                    className={styles.icon}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    Next
                </FaAngleRight>
            )}
        </div>
    );
};

export type PaginatorPropsType = {
    currentItem: number;
    itemCount: number;
    totalItemCount: number;
    portionSize: number;
    onChangeItemHandler: (page: number) => void;
};
