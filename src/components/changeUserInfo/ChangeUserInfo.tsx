import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { changeUserInfoTC } from "../../redux/profileReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./ChangeUserInfo.module.css";
import { FaTimes } from "react-icons/fa";

export const ChangeUserInfo: React.FC<ChangeUserInfoPropsType> = ({
    onClose,
}) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();

    const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const handleInputUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.currentTarget.value);
    };

    const submitHandler = () => {
        if (name || url) {
            dispatch(changeUserInfoTC(name, url));
            setName("");
            setUrl("");
        }

        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <label>
                    <span>Enter new name</span>
                    <br />
                    <Input
                        onChange={handleInputNameChange}
                        name="name"
                        required
                        value={name}
                    />
                </label>
                <label>
                    <span>Enter image url</span>
                    <br />
                    <Input
                        onChange={handleInputUrlChange}
                        name="url"
                        required
                        value={url}
                    />
                </label>

                <Button onClick={submitHandler} className={styles.btn}>
                    Submit
                </Button>
                <div>
                    <FaTimes onClick={onClose} className={styles.icon} />
                </div>
            </div>
        </Modal>
    );
};

// Types
type ChangeUserInfoPropsType = { onClose: () => void };
