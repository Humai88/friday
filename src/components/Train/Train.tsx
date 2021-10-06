import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {catchErrorAC} from "../../redux/appReducer";
import {CardType, getCardsTC, setCardsGradeAC, setCurrentPageAC} from "../../redux/cardsReducer";
import {AppStore} from "../../redux/store";
import {Button} from "../../UI-kit/Button/Button";
import {Card} from "../../UI-kit/Card/Card";
import {ErrorMes} from "../Error/ErrorMes";
import {Paginator} from "../Paginator/Paginator";
import {Table} from "../Table/Table";
import styles from "./Cards.module.css";

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}


const Train = (props: any) => {
    const [activeGrade, setActiveGrade] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector((store: AppStore) => store.cards.cards);
    const {_id} = useParams<{ _id: string }>();
    const date = new Date()
    const [grade, setGrade] = useState<number>(0)

    const [card, setCard] = useState<CardType>({
        _id: '',
        cardsPack_id: '',
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        rating: 0,
        updated: date,
    });
    const history = useHistory();

    const handleGoBackClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        history.goBack();
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (first) {
            dispatch(getCardsTC(_id));
            setFirst(false);
        }
        if (cards.length > 0) {
            setCard(getCard(cards))
        }
        ;
    }, [dispatch, first, cards]);

    const onNext = () => {
        dispatch(setCardsGradeAC(card._id, card.grade))
        setIsChecked(false);
        setActiveGrade(null)
    }

    return (
        <div>
            <div onClick={handleGoBackClick}>
                <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                </svg>
                GoBack to packlist
            </div>
            <div>{card.question}</div>
            <div>
                <Button onClick={() => setIsChecked(true)}>check</Button>
            </div>

            {isChecked && (
                <>
                <div>{card.answer}</div>

                {grades.map((g, i) => (

                    <Button
                            key = {'grade-' +i} onClick={() => onNext()
                        }>{g}</Button>
                            ))}

                    {/*<div><Button onClick={() => onNext}>next</Button></div>*/}
                    </>
                    )}
                </div>
            );
            };


            export default Train
            // Types

            type PackParamsType = {
            packId: string;
        };
