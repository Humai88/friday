import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PackType, removePackTC, updatePackTC } from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";
import { catchErrorAC } from "../../redux/appReducer";
import { CardType, deleteCardTC, updateCardTC } from "../../redux/cardsReducer";

export const Table: React.FC<TablePropsType> = ({headers, packs, cards}) => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStore) => state.app.status);
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    const userIdFromCards = useSelector(
        (state: AppStore) => state.cards.packUserId
    );
    const getLocalTime = (value: Date | string) => new Intl.DateTimeFormat().format(new Date(value));

    // Get packs table body
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => (
            <tr key={pack._id}>
                <td>{trimString(pack.name, 7)}</td>
                <td>{pack.cardsCount}</td>
                <td>{trimString(getLocalTime(pack.updated), 10)}</td>
                <td>{trimString(pack.user_name, 10)}</td>
                <td>
                    <NavLink to={`/profile/cards/${pack._id}`}>
                        <img src={cardsIcon} alt="cards" />
                    </NavLink>
                </td>
                <td>
                    <button className={styles.editBtn}>Learn</button>
                </td>
                <td>
                    {
                        pack.user_id === userId ?
                        (<button
                            className={styles.deleteBtn}
                            onClick={() => {
                                dispatch(removePackTC(pack._id));
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                            }}
                        >
                            Delete
                        </button>)
                        : ("")}
                </td>
                <td>
                    {pack.user_id === userId ? (
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
                    ) : ("")}
                </td>
            </tr>
        ));
    };

    // Get cards table body
    const renderCards = (cards: CardType[]) => {
        return cards.map((card) => (
            <tr key={card._id}>
                <td>{trimString(card.question, 10)}</td>
                <td>{card.answer}</td>
                <td>{trimString(getLocalTime(card.updated), 10)}</td>
                <td>{card.grade}</td>
                <td>
                    {userIdFromCards === userId ? (
                        <button
                            className={styles.deleteBtn}
                            onClick={() => {
                                dispatch(
                                    deleteCardTC(card._id, card.cardsPack_id)
                                );
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                            }}
                        >
                            Delete
                        </button>
                    ) : (
                        ""
                    )}
                </td>
                <td>
                    {userIdFromCards === userId ? (
                        <button
                            className={styles.editBtn}
                            onClick={() => {
                                dispatch(
                                    updateCardTC(
                                        card._id,
                                        card.cardsPack_id,
                                        "Question was updated",
                                        "Answer was updated",
                                        card.grade,
                                    ),
                                );
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                            }}
                        >
                            Edit
                        </button>
                    ) : (
                        ""
                    )}
                </td>
            </tr>
        ));
    };

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
    cards?: CardType[];
};
