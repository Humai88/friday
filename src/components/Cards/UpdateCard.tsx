import React, { ChangeEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { catchErrorAC } from "../../redux/appReducer";
import { addCardTC, updateCardTC } from "../../redux/cardsReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./UpdateCard.module.css";

export const UpdateCard: React.FC<UpdateModalPropsType> = ({
    onClose,
    cardId,
    cardsPackId,
    grade,
}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const handleQuestionInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    };
    const handleAnswerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    };
    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(updateCardTC(cardId, cardsPackId, question, answer, grade));
        onClose();
        setTimeout(() => {
            dispatch(catchErrorAC(""));
        }, 2000);
    };
    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <label>
                    <span>Enter new question</span>
                    <br />
                    <Input
                        onChange={handleQuestionInputChange}
                        name="question"
                        required
                        value={question}
                    />
                </label>
                <label>
                    <span>Enter new answer</span>
                    <br />

                    <Input
                        onChange={handleAnswerInputChange}
                        name="answer"
                        required
                        value={answer}
                    />
                </label>
                <div className={styles.btnsWrapper}>
                    <Button purple onClick={onClose} className={styles.btn}>
                        Cancel
                    </Button>
                    <Button onClick={submitHandler} className={styles.btn}>
                        Save
                    </Button>
                    <div>
                        <FaTimes onClick={onClose} className={styles.icon} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

// Types
type UpdateModalPropsType = {
    onClose: () => void;
    cardId: string;
    cardsPackId: string;
    grade: number;
};
