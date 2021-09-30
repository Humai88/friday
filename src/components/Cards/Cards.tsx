import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { catchErrorAC } from "../../redux/appReducer";
import { getCardsTC } from "../../redux/cardsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { Header } from "../Header/Header";
import { navLinksProfile } from "../Routes/Routes";
import { Table } from "../Table/Table";
import styles from "./Cards.module.css";

export const Cards = () => {
    const dispatch = useDispatch();
    const { packId } = useParams<PackParamsType>();
    const userId = useSelector((state: AppStore) => state.profile.profile._id);
    const userIdFromCards = useSelector(
        (state: AppStore) => state.cards.packUserId
    );
    const cards = useSelector((state: AppStore) => state.cards.cards);

    useEffect(() => {
        dispatch(getCardsTC(packId));
        setTimeout(() => {
            dispatch(catchErrorAC(""));
        }, 3000);
    }, [packId]);

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
            <Header
                arrayLinks={navLinksProfile}
                className={styles.header}
                profilePage
            />
            <div className={styles.content}>
                {userId === userIdFromCards && (
                    <Button className={styles.btn}>Add card</Button>
                )}
                <Card className={styles.wrapper}>
                    {cards.length === 0 ? (
                        <div className={styles.empty}>
                            <h2>There is no cards in this pack</h2>
                        </div>
                    ) : (
                        <div>
                            <Table headers={headers} cards={cards} />
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
