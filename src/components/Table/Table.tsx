import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PackType, removePackTC } from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";
import { catchErrorAC } from "../../redux/appReducer";
import { CardType, /*deleteCardTC, updateCardTC*/ } from "../../redux/cardsReducer";
import { ChangePack } from "../Packs/ChangePack";

export const Table: React.FC<TablePropsType> = ({headers, packs, cards}) => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStore) => state.app.status);
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    // const userIdFromCards = useSelector(
    //     (state: AppStore) => state.cards.packUserId
    // );
    const getLocalTime = (value: Date | string) =>
        new Intl.DateTimeFormat().format(new Date(value));
    const [showModal, setShowModal] = useState(false);

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
                        <NavLink to={`packs/lern/${pack._id}`} className={styles.btn}>Learn</NavLink>
                    </td>
                    <td className={styles.narrow}>
                        {pack.user_id === userId ? (
                            <button
                                className={`${styles.btn} ${styles.deleteBtn}`}
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
                    <td className={styles.narrow}>
                        {pack.user_id === userId ? (
                            <button
                                className={styles.btn}
                                onClick={() => {
                                    // dispatch(
                                    //     updatePackTC(
                                    //         pack._id,
                                    //         "Name was updated"
                                    //     )
                                    // );
                                    // setTimeout(() => {
                                    //     dispatch(catchErrorAC(""));
                                    // }, 2000);
                                    setShowModal(true);
                                }}
                            >
                                Edit
                            </button>
                        ) : (
                            ""
                        )}
                        {showModal && (
                            <ChangePack
                                onClose={() => {
                                    setShowModal(false);
                                }}
                                packId={pack._id}
                            />
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
                <td>{card.grade}</td>
                {/*<td>*/}
                {/*    {userIdFromCards === userId ? (*/}
                {/*        <button*/}
                {/*            className={styles.deleteBtn}*/}
                {/*            onClick={() => {*/}
                {/*                card._id &&*/}
                {/*                card.cardsPack_id &&*/}
                {/*                dispatch(*/}
                {/*                    deleteCardTC(*/}
                {/*                        card._id,*/}
                {/*                        card.cardsPack_id*/}
                {/*                    )*/}
                {/*                );*/}
                {/*                setTimeout(() => {*/}
                {/*                    dispatch(catchErrorAC(""));*/}
                {/*                }, 2000);*/}

                {/*                setShowModal(true);*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Delete*/}
                {/*        </button>*/}
                {/*    ) : (*/}
                {/*        ""*/}
                {/*    )}*/}
                {/*    { {showModal && userIdFromCards === userId && (*/}
                {/*        <DeleteModal*/}
                {/*            onClose={() => {*/}
                {/*                setShowModal(false);*/}
                {/*            }}*/}
                {/*            onDelete={() => {*/}
                {/*                dispatch(*/}
                {/*                    deleteCardTC(card._id, card.cardsPack_id)*/}
                {/*                );*/}
                {/*                setTimeout(() => {*/}
                {/*                    dispatch(catchErrorAC(""));*/}
                {/*                }, 2000);*/}
                {/*                setShowModal(false);*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    )} }*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <>*/}
                {/*        {userIdFromCards === userId ? (*/}
                {/*            <button*/}
                {/*                className={styles.editBtn}*/}
                {/*                onClick={() => {*/}
                {/*                    dispatch(*/}
                {/*                        updateCardTC(*/}
                {/*                            card._id,*/}
                {/*                            card.cardsPack_id,*/}
                {/*                            "Question was updated",*/}
                {/*                            "Answer was updated",*/}
                {/*                            card.grade*/}
                {/*                        )*/}
                {/*                    );*/}
                {/*                    setShowModal(true);*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                Edit*/}
                {/*            </button>*/}
                {/*        ) : (*/}
                {/*            ""*/}
                {/*        )}*/}
                {/*        { {showModal &&  (*/}
                {/*            <UpdateCard*/}
                {/*                onClose={() => {*/}
                {/*                    setShowModal(false);*/}
                {/*                }}*/}
                {/*                cardId={card._id}*/}
                {/*                cardsPackId={card.cardsPack_id}*/}
                {/*                grade={card.grade}*/}
                {/*            />*/}
                {/*        )} }*/}
                {/*    </>*/}
                {/*</td>*/}
            </tr>
        ));
    };

    return (
        <table className={styles.table}>
            {status === "loading" && <Preloader />}
            <thead>
            <tr>
                {
                    headers.map((header, index) => {
                        return  header === "Actions"
                            ? <th className={styles.actions} scope="col" key={index} colSpan={3}>{header}</th>
                            : <th scope="col" key={index}>{header}</th>;
                    })
                }
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
