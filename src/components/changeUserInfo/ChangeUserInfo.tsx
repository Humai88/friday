import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { changeUserInfoTC } from "../../redux/profileReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./ChangeUserInfo.module.css";

export const ChangeUserInfo: React.FC<ChangeUserInfoPropsType> = ({
    onClose,
}) => {
    const [changes, setChanges] = useState<InitialValuesType>({
        name: "",
        imgUrl: "",
    });
    const dispatch = useDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        const newValue = value;
        setChanges({
            ...changes,
            [name]: newValue,
        });
    };

    const submitHandler = () => {
        if (changes.name && changes.imgUrl) {
            dispatch(changeUserInfoTC(changes.name, changes.imgUrl));
            setChanges({ name: "", imgUrl: "" });
        }
        console.log(changes.name, changes.imgUrl);
    };

    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <label>
                    <span>Enter new name</span>
                    <br />
                    <Input
                        onChange={handleInputChange}
                        name="name"
                        required
                        value={changes.name}
                    />
                </label>
                <label>
                    <span>Enter image URL</span>
                    <br />
                    <Input
                        onChange={handleInputChange}
                        name="imgUrl"
                        required
                        value={changes.imgUrl}
                    />
                </label>

                <Button onClick={submitHandler} className={styles.btn}>
                    Submit
                </Button>
            </div>
        </Modal>
    );
};

// Types
type ChangeUserInfoPropsType = { onClose: () => void };
type InitialValuesType = { name: string; imgUrl: string };
