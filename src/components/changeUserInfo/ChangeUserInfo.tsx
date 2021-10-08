import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfoTC } from "../../redux/profileReducer";
import { Button } from "../../UI-kit/Button/Button";
import { Input } from "../../UI-kit/Input/Input";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./ChangeUserInfo.module.css";
import { FaTimes } from "react-icons/fa";
import { AppStore } from "../../redux/store";
import { MdPhotoCamera } from "react-icons/md";
export const ChangeUserInfo: React.FC<ChangeUserInfoPropsType> = ({
    onClose,
}) => {
    const prevName = useSelector(
        (state: AppStore) => state.profile.profile.name
    );
    const [name, setName] = useState(prevName);
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();

    const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const handleInputUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.currentTarget.value);
    };
    const photo = useSelector(
        (state: AppStore) => state.profile.profile.avatar
    );

    const submitHandler = () => {
        if (name || url) {
            dispatch(changeUserInfoTC(name, url));
            setName("");
            setUrl("");
        }
        onClose();
    };

    const handleDisplayFileDetails = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.files &&
            setUrl(window.URL.createObjectURL(e.currentTarget.files[0]));
    };
    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <h2>Personal Information</h2>
                <div>
                    <img
                        className={styles.avatar}
                        src={
                            photo == null
                                ? "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                                : photo
                        }
                        alt="avatar"
                    />
                    <label className={styles.iconUpload}>
                        <MdPhotoCamera />
                        <input
                            type="file"
                            className={styles.dispNone}
                            required
                            onChange={handleDisplayFileDetails}
                        />
                    </label>
                </div>
                <label className={styles.input}>
                    <span>Nickname</span>

                    <br />
                    <Input
                        onChange={handleInputNameChange}
                        name="name"
                        required
                        value={name}
                    />
                </label>
                <label>
                    <span>Image url</span>
                    <br />
                    <Input
                        onChange={handleInputUrlChange}
                        name="url"
                        required
                        value={url}
                    />
                </label>

                <div className={styles.btnsWrapper}>
                    <Button purple onClick={onClose} className={styles.btn}>
                        Cancel
                    </Button>
                    <Button onClick={submitHandler} className={styles.btn}>
                        Save
                    </Button>
                </div>
                <div>
                    <FaTimes onClick={onClose} className={styles.icon} />
                </div>
            </div>
        </Modal>
    );
};

// Types
type ChangeUserInfoPropsType = { onClose: () => void };
