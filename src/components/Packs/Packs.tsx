import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacksTC, setCurrentPageAC } from "../../redux/packsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Preloader } from "../../UI-kit/Preloader/Preloader";
import { ErrorMes } from "../Error/ErrorMes";
import { Paginator } from "../Paginator/Paginator";
import { Table } from "../Table/Table";
import styles from "./Packs.module.css";
import { UpdatePack } from "./UpdatePack";

export const Packs = () => {
    const [showModal, setShowModal] = useState(false);
    const errorMessage = useSelector((state: AppStore) => state.packs.error);
    const packs = useSelector((state: AppStore) => state.packs.cardPacks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacksTC());
    }, [dispatch]);
    const totalPacksCount = useSelector(
        (state: AppStore) => state.packs.cardPacksTotalCount
    );
    const currentPage = useSelector(
        (state: AppStore) => state.packs.currentPage
    );

    const pageCount = useSelector((state: AppStore) => state.packs.pageCount);

    const onChangePageHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(getPacksTC());
    };
    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };
    const headers = [
        "Pack Name",
        "Cards Count",
        "Updated",
        "Created By",
        "Cards",
        "Actions",
        "",
        "",
    ];

    return (
        <div className={styles.wrapper}>
            {errorMessage && <ErrorMes>{errorMessage}</ErrorMes>}
            {showModal && <UpdatePack onClose={hideModalHandler} />}
            <div className={styles.sidebar}>
                <h3>Show packs cards</h3>
            </div>
            <div className={styles.packsList}>
                <h1>Packs List</h1>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <Button onClick={showModalHandler} className={styles.btn}>
                        Add new pack
                    </Button>
                </div>
                <div className={styles.tableWrapper}>
                    <Table headers={headers} packs={packs} />
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
