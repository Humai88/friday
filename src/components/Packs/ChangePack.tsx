import React, { ChangeEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { catchErrorAC } from "../../redux/appReducer";
import { updatePackTC } from "../../redux/packsReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./ChangePack.module.css";

export const ChangePack: React.FC<ChagePackModalPropsType> = ({
    onClose,
    packId,
}) => {
    const [title, setTitle] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(updatePackTC(packId, title));
        onClose();
        setTimeout(() => {
            dispatch(catchErrorAC(""));
        }, 2000);
    };
    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <label>
                    <span>Enter new pack title</span>
                    <br />
                    <Input
                        onChange={handleInputChange}
                        name="question"
                        required
                        value={title}
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
type ChagePackModalPropsType = {
    onClose: () => void;
    packId: string;
};
