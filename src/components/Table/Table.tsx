import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { PackType, removePackTC, updatePackTC } from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";
import { catchErrorAC } from "../../redux/appReducer";
import { CardType, deleteCardTC, updateCardTC } from "../../redux/cardsReducer";
import { DeleteModal } from "../Packs/DeleteModal";
import { UpdateCard } from "../Cards/UpdateCard";

export const Table: React.FC<TablePropsType> = ({ headers, packs, cards }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const status = useSelector((state: AppStore) => state.app.status);
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    const userIdFromCards = useSelector(
        (state: AppStore) => state.cards.packUserId
    );
    const getLocalTime = (value: Date | string) =>
        new Intl.DateTimeFormat().format(new Date(value));
    const [showModal, setShowModal] = useState(false);
    
    // Get packs table body
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => (
            <tr key={pack._id}>
                <td>{pack.name}</td>
                <td>{pack.cardsCount}</td>
                <td>{getLocalTime(pack.updated)}</td>
                <td>{pack.user_name}</td>
                <td>
                    <NavLink to={`/profile/cards/${pack._id}`}>
                        <img src={cardsIcon} alt="cards" />
                    </NavLink>
                </td>
                <td>
                    <NavLink to={`packs/lern/${pack._id}`} className={styles.editBtn}>Learn</NavLink>
                </td>
                <td>
                    {pack.user_id === userId ? (
                        <button
                            className={styles.deleteBtn}
                            onClick={() => {
                                dispatch(removePackTC(pack._id));
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                                // setShowModal(true);
                            }}
                        >
                            Delete
                        </button>
                    ) : (
                        ""
                    )}
                    {/* {showModal && pack.user_id === userId && (
                        <DeleteModal
                            onClose={() => {
                                setShowModal(false);
                            }}
                            onDelete={() => {
                                dispatch(removePackTC(pack._id));
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                                setShowModal(false);
                            }}
                        />
                    )} */}
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
                    ) : (
                        ""
                    )}
                </td>
            </tr>
        ));
    };

    // Get cards table body
    const renderCards = (cards: CardType[]) => {
        return cards.map((card) => (
            <tr key={card._id}>
                <td>{card.question}</td>
                <td>{card.answer}</td>
                <td>{trimString(getLocalTime(card.updated), 10)}</td>
                <td>{card.grade}</td>
                <td>
                    {userIdFromCards === userId ? (
                        <button
                            className={styles.deleteBtn}
                            onClick={() => {
                                {
                                    card._id &&
                                        card.cardsPack_id &&
                                        dispatch(
                                            deleteCardTC(
                                                card._id,
                                                card.cardsPack_id
                                            )
                                        );
                                    setTimeout(() => {
                                        dispatch(catchErrorAC(""));
                                    }, 2000);
                                }

                                //    setShowModal(true);
                            }}
                        >
                            Delete
                        </button>
                    ) : (
                        ""
                    )}
                    {/* {showModal && userIdFromCards === userId && (
                        <DeleteModal
                            onClose={() => {
                                setShowModal(false);
                            }}
                            onDelete={() => {
                                 dispatch(
                                    deleteCardTC(card._id, card.cardsPack_id)
                                );
                                setTimeout(() => {
                                    dispatch(catchErrorAC(""));
                                }, 2000);
                                   setShowModal(false);
                            }}
                        />
                    )} */}
                </td>
                <td>
                    {userIdFromCards === userId ? (
                        <button
                            className={styles.editBtn}
                            onClick={() => {
                                // dispatch(
                                //     updateCardTC(
                                //         card._id,
                                //         card.cardsPack_id,
                                //         "Question was updated",
                                //         "Answer was updated",
                                //         card.grade
                                //     )
                                // );
                                setShowModal(true);
                            }}
                        >
                            Edit
                        </button>
                    ) : (
                        ""
                    )}
                    {showModal && (
                        <UpdateCard
                            onClose={() => {
                                setShowModal(false);
                            }}
                            cardId={card._id}
                            cardsPackId={card.cardsPack_id}
                            grade={card.grade}
                        />
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
