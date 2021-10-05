import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { catchErrorAC } from "../../redux/appReducer";
import { getCardsTC, setCurrentPageAC } from "../../redux/cardsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { ErrorMes } from "../Error/ErrorMes";
import { Paginator } from "../Paginator/Paginator";
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

    const history = useHistory();

    const handleGoBackClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        history.goBack();
    };

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

            <div className={styles.content}>
                <div className={styles.goback} onClick={handleGoBackClick}>
                    <svg
                        width={25}
                        height={25}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                        ></path>
                    </svg>
                    GoBack
                </div>
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
