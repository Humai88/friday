import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardType, getCardsTC } from "../../redux/cardsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";

const grades = ["не знал", "забыл", "долго думал", "перепутал", "знал"];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce(
        (acc, card) => acc + (6 - card.grade) * (6 - card.grade),
        0
    );
    const rand = Math.random() * sum;
    const res = cards.reduce(
        (acc: { sum: number; id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return { sum: newSum, id: newSum < rand ? i : acc.id };
        },
        { sum: 0, id: -1 }
    );
    console.log("test: ", sum, rand, res);

    return cards[res.id + 1];
};

export const DraftLearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    // const [first, setFirst] = useState<boolean>(0);
    const { cards } = useSelector((state: AppStore) => state.cards);
    const { packId } = useParams<ParamsType>();

    const [card, setCard] = useState<CardType>({
        _id: "fake",
        cardsPack_id: "",
        answer: "answer fake",
        question: "question fake",
        grade: 0,
        shots: 0,
        rating: 0,
        updated: "",
    });

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("LearnContainer useEffect");

        if (first) {
            dispatch(getCardsTC(packId));
            setFirst(false);
        }

        console.log("cards", cards);
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log("LearnContainer useEffect off");
        };
    }, [dispatch, packId, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            // dispatch
            setCard(getCard(cards));
        } else {
        }
    };

    return (
        <Card>
            <h1>Learn page</h1>
            <div>{card.question}</div>
            <div>
                <Button onClick={() => setIsChecked(true)}>check</Button>
            </div>
            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <Button key={"grade-" + i} onClick={() => {}}>
                            {g}
                        </Button>
                    ))}

                    <div>
                        <Button onClick={onNext}>next</Button>
                    </div>
                </>
            )}
        </Card>
    );
};

//Types
type ParamsType = {
    packId: string;
};
