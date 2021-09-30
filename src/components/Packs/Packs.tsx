import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getMyPacksTC,
    getPacksTC,
    setCurrentPageAC,
} from "../../redux/packsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { ErrorMes } from "../Error/ErrorMes";
import { Paginator } from "../Paginator/Paginator";
import { Table } from "../Table/Table";
import styles from "./Packs.module.css";
import { UpdatePack } from "./UpdatePack";

export const Packs = () => {
    const [showModal, setShowModal] = useState(false);
    const errorMessage = useSelector((state: AppStore) => state.app.error);
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
    const getMyPacksHandler = () => {
        dispatch(getMyPacksTC());
    };
    const getAllPacksHandler = () => {
        dispatch(getPacksTC());
    };

    return (
        <div className={styles.wrapper}>
            {errorMessage && <ErrorMes>{errorMessage}</ErrorMes>}
            {showModal && <UpdatePack onClose={hideModalHandler} />}
            <div className={styles.sidebar}>
                <h3>Show packs cards</h3>
                <div className={styles.btnWrapper}>
                    <div onClick={getMyPacksHandler} className={styles.sideBtn}>
                        My
                    </div>
                    <div onClick={getAllPacksHandler} className={styles.active}>
                        All
                    </div>
                </div>
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
