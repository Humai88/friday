import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    catchErrorAC,
    PackType,
    removePackTC,
    updatePackTC,
} from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";

export const Table: React.FC<TablePropsType> = ({ headers, packs, cards }) => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStore) => state.app.status);
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => (
            <tr key={pack._id}>
                <td>{trimString(pack.name, 7)}</td>
                <td>{pack.cardsCount}</td>
                <td>{trimString(pack.updated.toString(), 10)}</td>
                <td>{trimString(pack.user_name, 10)}</td>
                <td>
                    <NavLink to={"/"}>
                        <img src={cardsIcon} alt="cards" />
                    </NavLink>
                </td>
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
            {status === "loading" && <Preloader />}
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
