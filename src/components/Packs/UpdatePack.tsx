import React, { ChangeEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addPackTC } from "../../redux/packsReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./UpdatePack.module.css";

export const UpdatePack: React.FC<UpdateModalPropsType> = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(addPackTC(title));
        onClose();
    };
    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <label>
                    <span>Enter pack's title</span>
                    <br />
                    <Input
                        onChange={handleInputChange}
                        name="name"
                        required
                        value={title}
                    />
                </label>

                <Button onClick={submitHandler} className={styles.btn}>
                    Ok
                </Button>
                <div>
                    <FaTimes onClick={onClose} className={styles.icon} />
                </div>
            </div>
        </Modal>
    );
};

// Types
type UpdateModalPropsType = {
    onClose: () => void;
};
