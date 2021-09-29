import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    catchErrorAC,
    PackType,
    removePackTC,
    updatePackTC,
} from "../../redux/packsReducer";
import styles from "./Table.module.css";

export const Table: React.FC<TablePropsType> = ({ headers, packs, cards }) => {
    const dispatch = useDispatch();
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => (
            <tr key={pack._id}>
                <td> {pack.name}</td>
                <td>{pack.cardsCount}</td>
                <td>{pack.updated.toString()}</td>
                <td>{pack.user_name}</td>

                <td>
                    <button
                        className={styles.deleteBtn}
                        onClick={() => {
                            dispatch(removePackTC(pack._id));
                            setTimeout(() => {
                                dispatch(catchErrorAC(""));
                            }, 2000);
                        }}
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <button
                        className={styles.editBtn}
                        onClick={() => {
                            dispatch(
                                updatePackTC(pack._id, "Name was updated")
                            );
                            setTimeout(() => {
                                dispatch(catchErrorAC(""));
                            }, 2000);
                        }}
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button className={styles.editBtn}>Learn</button>
                </td>
            </tr>
        ));
    };
    const renderCards = (cards: any[]) => {};
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return (
                            <th scope="col" key={index}>
                                {header}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {packs && renderPacks(packs)}
                {cards && renderCards(cards)}
            </tbody>
        </table>
    );
};
// Types
type TablePropsType = {
    headers: string[];
    packs?: PackType[];
    cards?: any[];
};
