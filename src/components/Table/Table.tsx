import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    PackType,
    removePackTC,
    setCurrentPackIdAC,
} from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";
import { catchErrorAC } from "../../redux/appReducer";
import {
    CardType,
    deleteCardTC,
    setCurrentCardGradeAC,
    setCurrentCardIdAC,
} from "../../redux/cardsReducer";
import { ChangePack } from "../Packs/ChangePack";
import { DeletePackModal } from "../Packs/DeletePackModal";
import { DeleteCardModal } from "../Cards/DeleteCardModal";
import { UpdateCard } from "../Cards/UpdateCard";
import Rating from "@mui/material/Rating";

export const Table: React.FC<TablePropsType> = ({ headers, packs, cards }) => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStore) => state.app.status);
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    const userIdFromCards = useSelector(
        (state: AppStore) => state.cards.packUserId
    );
    const packId = useSelector((state: AppStore) => state.packs.packsId);
    const cardId = useSelector((state: AppStore) => state.cards.cardId);
    const getLocalTime = (value: Date | string) =>
        new Intl.DateTimeFormat().format(new Date(value));
    const [showPackChangeModal, setShowPackChangeModal] = useState(false);
    const [showPackDeleteModal, setShowPackDeleteModal] = useState(false);
    const [showCardDeleteModal, setShowCardDeleteModal] = useState(false);
    const [showCardUpdateModal, setShowCardUpdateModal] = useState(false);

    // Get packs table body
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => {
            return (
                <tr key={pack._id}>
                    <td>{trimString(pack.name, 20)}</td>
                    <td>{pack.cardsCount}</td>
                    <td>{trimString(getLocalTime(pack.updated), 20)}</td>
                    <td>{trimString(pack.user_name, 22)}</td>
                    <td className={styles.narrow}>
                        <NavLink to={`/profile/cards/${pack._id}`}>
                            <img src={cardsIcon} alt="cards" />
                        </NavLink>
                    </td>
                    <td className={styles.narrow}>
                        <NavLink
                            to={`packs/lern/${pack._id}`}
                            className={styles.btn}
                        >
                            Learn
                        </NavLink>
                    </td>
                    <td className={styles.narrow}>
                        {pack.user_id === userId ? (
                            <button
                                className={`${styles.btn} ${styles.deleteBtn}`}
                                onClick={() => {
                                    setShowPackDeleteModal(true);
                                    dispatch(setCurrentPackIdAC(pack._id));
                                }}
                            >
                                Delete
                            </button>
                        ) : (
                            ""
                        )}
                    </td>
                    <td className={styles.narrow}>
                        {pack.user_id === userId ? (
                            <button
                                className={styles.btn}
                                onClick={() => {
                                    dispatch(setCurrentPackIdAC(pack._id));
                                    setShowPackChangeModal(true);
                                }}
                            >
                                Edit
                            </button>
                        ) : (
                            ""
                        )}
                    </td>
                </tr>
            );
        });
    };

    // Get cards table body
    const renderCards = (cards: CardType[]) => {
        return cards.map((card) => (
            <tr key={card._id}>
                <td>{trimString(card.question, 10)}</td>
                <td>{card.answer}</td>
                <td>{trimString(getLocalTime(card.updated), 10)}</td>
                <td>
                    <Rating name="read-only" value={Math.round(card.grade)} readOnly />
                </td>
                <td>
                    {userIdFromCards === userId ? (
                        <button
                            className={`${styles.btn} ${styles.deleteBtn}`}
                            onClick={() => {
                                dispatch(setCurrentCardIdAC(card._id));
                                dispatch(setCurrentPackIdAC(card.cardsPack_id));
                                setShowCardDeleteModal(true);
                            }}
                        >
                            Delete
                        </button>
                    ) : (
                        ""
                    )}
                </td>
                <td colSpan={3}>
                    <>
                        {userIdFromCards === userId ? (
                            <button
                                className={styles.btn}
                                onClick={() => {
                                    dispatch(setCurrentCardGradeAC(card.grade));
                                    dispatch(setCurrentCardIdAC(card._id));
                                    dispatch(
                                        setCurrentPackIdAC(card.cardsPack_id)
                                    );
                                    setShowCardUpdateModal(true);
                                }}
                            >
                                Edit
                            </button>
                        ) : (
                            ""
                        )}
                    </>
                </td>
            </tr>
        ));
    };

    return (
        <table className={styles.table}>
            {status === "loading" && <Preloader />}
            {showPackDeleteModal && (
                <DeletePackModal
                    onClose={() => {
                        setShowPackDeleteModal(false);
                    }}
                    onDelete={() => {
                        dispatch(removePackTC(packId));
                        setTimeout(() => {
                            dispatch(catchErrorAC(""));
                        }, 2000);
                        setShowPackDeleteModal(false);
                    }}
                />
            )}
            {showPackChangeModal && (
                <ChangePack
                    onClose={() => {
                        setShowPackChangeModal(false);
                    }}
                    packId={packId}
                />
            )}
            {showCardDeleteModal && (
                <DeleteCardModal
                    onClose={() => {
                        setShowCardDeleteModal(false);
                    }}
                    onDelete={() => {
                        dispatch(deleteCardTC(cardId, packId));
                        setTimeout(() => {
                            dispatch(catchErrorAC(""));
                        }, 2000);
                        setShowCardDeleteModal(false);
                    }}
                />
            )}
            {showCardUpdateModal && (
                <UpdateCard
                    onClose={() => {
                        setShowCardUpdateModal(false);
                    }}
                    cardId={cardId}
                    cardsPackId={packId}
                />
            )}
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return header === "Actions" ? (
                            <th
                                className={styles.actions}
                                scope="col"
                                key={index}
                                colSpan={3}
                            >
                                {header}
                            </th>
                        ) : (
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
