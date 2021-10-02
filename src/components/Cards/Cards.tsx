import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { catchErrorAC } from "../../redux/appReducer";
import { getCardsTC, setCurrentPageAC } from "../../redux/cardsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { ErrorMes } from "../Error/ErrorMes";
import { Header } from "../Header/Header";
import { Paginator } from "../Paginator/Paginator";
import { navLinksProfile } from "../Routes/Routes";
import { Table } from "../Table/Table";
import { AddCard } from "./AddCard";
import styles from "./Cards.module.css";

export const Cards = () => {
    const dispatch = useDispatch();
    const { packId } = useParams<PackParamsType>();
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    const userIdFromCards = useSelector(
        (state: AppStore) => state.cards.packUserId
    );
    const totalPacksCount = useSelector(
        (state: AppStore) => state.cards.cardsCount
    );
    const currentPage = useSelector(
        (state: AppStore) => state.cards.currentPage
    );

    const pageCount = useSelector((state: AppStore) => state.cards.pageCount);
    const onChangePageHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(getCardsTC(packId));
    };

    const cards = useSelector((state: AppStore) => state.cards.cards);
    const [showModal, setShowModal] = useState(false);
    const errorMessage = useSelector((state: AppStore) => state.app.error);

    useEffect(() => {
        dispatch(getCardsTC(packId));
        setTimeout(() => {
            dispatch(catchErrorAC(""));
        }, 3000);
    }, [dispatch, packId]);

    const headers = [
        "Question",
        "Answer",
        "Last Updated",
        "Grade",
        "Actions",
        "",
    ];

    return (
        <>
            {errorMessage && <ErrorMes>{errorMessage}</ErrorMes>}
            {showModal && (
                <AddCard
                    onClose={() => {
                        setShowModal(false);
                    }}
                    packId={packId}
                />
            )}
            <Header
                arrayLinks={navLinksProfile}
                className={styles.header}
                profilePage
            />
            <div className={styles.content}>
                {userId === userIdFromCards && (
                    <Button
                        className={styles.btn}
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        Add card
                    </Button>
                )}
                <Card className={styles.wrapper}>
                    {cards.length === 0 ? (
                        <div className={styles.empty}>
                            <h2>There is no cards in this pack</h2>
                        </div>
                    ) : (
                        <div>
                            <Table headers={headers} cards={cards} />
                            <Paginator
                                currentItem={currentPage}
                                itemCount={pageCount}
                                totalItemCount={totalPacksCount}
                                portionSize={10}
                                onChangeItemHandler={onChangePageHandler}
                            />
                        </div>
                    )}
                </Card>
            </div>
        </>
    );
};

// Types

type PackParamsType = {
    packId: string;
};
