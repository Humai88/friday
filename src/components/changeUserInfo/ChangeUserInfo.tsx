import React, { ChangeEvent, useRef, useState } from "react";
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
    const inRef = useRef<HTMLInputElement>(null);
    const prevName = useSelector(
        (state: AppStore) => state.profile.profile.name
    );
    const [name, setName] = useState(prevName);
    const [selectedFile, setSelectedFile] = useState<any>();
    const dispatch = useDispatch();

    const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const photo = useSelector(
        (state: AppStore) => state.profile.profile.avatar
    );
    const fileSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setSelectedFile(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const submitHandler = () => {
        if (name || selectedFile) {
            dispatch(changeUserInfoTC(name, selectedFile));
            setName("");
        }
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <h2>Personal Information</h2>
                <div>
                    <img
                        className={styles.avatar}
                        src={
                            selectedFile
                                ? selectedFile
                                : photo == null
                                ? "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                                : photo
                        }
                    />
                    <label className={styles.iconUpload}>
                        <MdPhotoCamera
                            onClick={() =>
                                inRef && inRef.current && inRef.current.click()
                            }
                        />
                    </label>
                    <input
                        ref={inRef}
                        type="file"
                        className={styles.dispNone}
                        required
                        onChange={fileSelectedHandler}
                    />
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
