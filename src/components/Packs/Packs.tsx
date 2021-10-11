import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { catchErrorAC } from "../../redux/appReducer";
import {
    getPacksTC,
    setCurrentPageAC,
    setMyPageAC,
    setRangeValuesAC,
    setSearchPacksAC,
} from "../../redux/packsReducer";
import { setProfileIdAC } from "../../redux/profileReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import RangeUI from "../../UI-kit/RangeUI/RangeUI";
import { ErrorMes } from "../Error/ErrorMes";
import { Paginator } from "../Paginator/Paginator";
import { Table } from "../Table/Table";
import styles from "./Packs.module.css";
import { AddPack } from "./AddPack";

export const Packs = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchPack, setSearchPack] = useState("");
    const errorMessage = useSelector((state: AppStore) => state.app.error);
    const packs = useSelector((state: AppStore) => state.packs.cardPacks);
    const min = useSelector((state: AppStore) => state.packs.minCardsCount);
    const max = useSelector((state: AppStore) => state.packs.maxCardsCount);
    const pageCount = useSelector((state: AppStore) => state.packs.pageCount);
    const myPage = useSelector((state: AppStore) => state.packs.myPage);
    const totalPacksCount = useSelector(
        (state: AppStore) => state.packs.cardPacksTotalCount
    );
    const currentPage = useSelector(
        (state: AppStore) => state.packs.currentPage
    );
    const userId = useSelector((state: AppStore) => state.profile.profile._id);

    const dispatch = useDispatch();

    const headers = [
        "Name",
        "Count",
        "Updated",
        "Created By",
        "Cards",
        "Actions",
    ];

    useEffect(() => {
        // dispatch(setProfileIdAC("")); // not currently works btns all and my when goBack from cards page
        dispatch(getPacksTC());

        // setTimeout(() => {
        //     dispatch(catchErrorAC("")); // not currently works btns all and my when goBack from cards page
        // }, 2000);
    }, [dispatch]);

    const onChangePageHandler = useCallback(
        (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber));
            dispatch(getPacksTC());
        },
        [dispatch]
    );

    const callSetSearchPack = (value: string) => {
        setSearchPack(value);
        dispatch(setSearchPacksAC(searchPack));
    };

    const getMyPacksHandler = () => {
        dispatch(setProfileIdAC(userId));
        dispatch(setMyPageAC(true));
        dispatch(getPacksTC());
    };

    const getAllPacksHandler = () => {
        dispatch(setProfileIdAC(""));
        dispatch(setMyPageAC(false));
        dispatch(getPacksTC());
    };

    const [value, setValue] = useState<number[]>([min, max]);

    const onChangeSuperDoubleRange = useCallback(
        (value: number[]) => {
            dispatch(setRangeValuesAC(value[0], value[1]));
            setValue(value);
        },
        [dispatch]
    );

    return (
        <>
            <div className={styles.wrapper}>
                {errorMessage && <ErrorMes>{errorMessage}</ErrorMes>}
                {showModal && (
                    <AddPack
                        onClose={() => {
                            setShowModal(false);
                        }}
                    />
                )}
                <div className={styles.sidebar}>
                    <h3>Show packs cards</h3>
                    <div className={styles.btnWrapper}>
                        <button
                            onClick={getMyPacksHandler}
                            className={
                                myPage === true
                                    ? `${styles.sideBtn} ${styles.active}`
                                    : styles.sideBtn
                            }
                            disabled={myPage === true ? true : false}
                        >
                            My
                        </button>
                        <button
                            onClick={getAllPacksHandler}
                            className={
                                myPage === false
                                    ? `${styles.sideBtn} ${styles.active}`
                                    : styles.sideBtn
                            }
                            disabled={myPage === false ? true : false}
                        >
                            All
                        </button>
                    </div>

                    <div className={styles.sliderComponent}>
                        <h3>Number of cards</h3>
                        <div className={styles.sliderWrapper}>
                            <RangeUI
                                value={value}
                                onChangeRange={onChangeSuperDoubleRange}
                                onMouseUp={() => dispatch(getPacksTC())}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.packsList}>
                    <h1>Packs List</h1>
                    <div className={styles.search}>
                        <div className={styles.fieldGroup}>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) =>
                                    callSetSearchPack(e.currentTarget.value)
                                }
                            />
                            <Button
                                className={styles.searchBtn}
                                onClick={() => dispatch(getPacksTC())}
                            >
                                Search
                            </Button>
                        </div>

                        <div className={styles.btnsWrapper}>
                            <Button
                                className={styles.searchBtn}
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                Add new pack
                            </Button>
                        </div>
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
        </>
    );
};
