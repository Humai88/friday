import React, { useEffect } from "react";
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
    useEffect(() => {
        dispatch(getCardsTC(packId));
        setTimeout(() => {
            dispatch(catchErrorAC(""));
        }, 3000);
    }, [dispatch]);
    const headers = ["Question", "Answer", "Last Updated", "Grade"];
    const cards = useSelector((state: AppStore) => state.cards.cards);

    return (
        <>
            <Header
                arrayLinks={navLinksProfile}
                className={styles.header}
                profilePage
            />
            <Card className={styles.wrapper}>
                {cards.length === 0 ? (
                    <div className={styles.empty}>
                        <h2>There is no cards in this pack</h2>
                        <Button>Add card</Button>
                    </div>
                ) : (
                    <Table headers={headers} cards={cards} />
                )}
            </Card>
        </>
    );
};

// Types

type PackParamsType = {
    packId: string;
};
