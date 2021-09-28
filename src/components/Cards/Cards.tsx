import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPacksTC,
    removePackTC,
    setCurrentPageAC,
    updatePackTC,
} from "../../redux/packsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Paginator } from "../Paginator/Paginator";
import styles from "./Cards.module.css";
import { UpdatePack } from "./UpdatePack";

export const Cards = () => {
    const [showModal, setShowModal] = useState(false);
    const packs = useSelector((state: AppStore) => state.packs.cardPacks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacksTC());
    }, []);
    const totalPacksCount = useSelector(
        (state: AppStore) => state.packs.cardPacksTotalCount
    );
    const currentPage = useSelector(
        (state: AppStore) => state.packs.currentPage
    );
    const pageCount = useSelector((state: AppStore) => state.packs.pageCount);

    const onChangePageHandler = (pageNumber: number) => {
        dispatch(getPacksTC());
        dispatch(setCurrentPageAC(pageNumber));
    };
    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.wrapper}>
            {showModal && <UpdatePack onClose={hideModalHandler} />}

            <div className={styles.sidebar}></div>
            <div className={styles.packsList}>
                <h1>Packs List</h1>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <Button onClick={showModalHandler} className={styles.btn}>
                        Add new pack
                    </Button>
                </div>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Pack Name</th>
                                <th>Cards Count</th>
                                <th>Updated</th>
                                <th>Created By</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {packs.map((pack) => (
                                <tr key={pack._id}>
                                    <td> {pack.name}</td>
                                    <td>{pack.cardsCount}</td>
                                    <td> {pack.updated.toString()}</td>
                                    <td>{pack.user_name}</td>

                                    <td>
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    removePackTC(pack._id)
                                                );
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    updatePackTC(
                                                        pack._id,
                                                        "Name was updated"
                                                    )
                                                );
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Paginator
                        currentItem={currentPage}
                        itemCount={pageCount}
                        totalItemCount={totalPacksCount}
                        portionSize={10}
                        onChangeItemHandler={onChangePageHandler}
                    />
                </div>
            </div>
        </div>
    );
};
