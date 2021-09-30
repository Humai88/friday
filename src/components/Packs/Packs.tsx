import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPacksTC, setCurrentPageAC, setSearchPacksAC} from "../../redux/packsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import RangeUI from "../../UI-kit/RangeUI/RangeUI";
import { ErrorMes } from "../Error/ErrorMes";
import { Paginator } from "../Paginator/Paginator";
import { Table } from "../Table/Table";
import styles from "./Packs.module.css";
import { UpdatePack } from "./UpdatePack";

export const Packs = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchPack, setSearchPack] = useState('')
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
    const callSetSearchPack = (value: string) => {
        setSearchPack(value)
        dispatch(setSearchPacksAC(searchPack))
    }

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

    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(90)

    const onChangeSuperDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={styles.wrapper}>
            {errorMessage && <ErrorMes>{errorMessage}</ErrorMes>}
            {showModal && <UpdatePack onClose={hideModalHandler} />}
            <div className={styles.sidebar}>
                <div className={styles.showPacksComponent}>
                    <h3>Show packs cards</h3>
                </div>


                <div className={styles.sliderComponent}>
                    <h3>Number of cards</h3>
                    <div className={styles.sliderWrapper}>
                        <RangeUI
                            value={[value1, value2]}
                            onChangeRange={onChangeSuperDoubleRange}
                        />

                    </div>
                </div>


            </div>
            <div className={styles.packsList}>
                <h1>Packs List</h1>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." onChange={(e) => callSetSearchPack(e.currentTarget.value) } /> <Button onClick={() => dispatch(getPacksTC())}>Search</Button>
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


