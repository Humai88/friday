import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { PackType, removePackTC, updatePackTC } from "../../redux/packsReducer";
import styles from "./Table.module.css";
import cardsIcon from "./../../assets/images/icon-cards.svg";
import { trimString } from "./../../helpers/helpers";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { AppStore } from "../../redux/store";
import { catchErrorAC } from "../../redux/appReducer";
import { PATH } from "../Routes/Routes";
import { CardType } from "../../redux/cardsReducer";

export const Table: React.FC<TablePropsType> = ({ headers, packs, cards }) => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStore) => state.app.status);

    // Get packs table body
    const renderPacks = (packs: PackType[]) => {
        return packs.map((pack) => (
            <tr key={pack._id}>
                <td>{trimString(pack.name, 7)}</td>
                <td>{pack.cardsCount}</td>
                <td>{trimString(pack.updated.toString(), 10)}</td>
                <td>{trimString(pack.user_name, 10)}</td>
                <td>
                    <NavLink to={`/profile/cards/${pack._id}`}>
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

    // Get cards table body
    const renderCards = (cards: CardType[]) => {
        return cards.map((card) => (
            <tr key={card._id}>
                <td>{trimString(card.question, 10)}</td>
                <td>{card.answer}</td>
                <td>{trimString(card.updated.toString(), 10)}</td>
                <td>{card.rating}</td>
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

// const { packId } = useParams<PackParamsType>();
// const cardPage = cards?.find((card) => card.answer === packId);

// const renderCards = () => {
//     return (
//         <tr key={cardPage?._id}>
//             <td>{cardPage?.question}</td>
//             <td>{cardPage?.answer}</td>
//             <td>{cardPage?.updated.toString()}</td>
//             <td>{cardPage?.rating}</td>
//         </tr>
//     );
// };
