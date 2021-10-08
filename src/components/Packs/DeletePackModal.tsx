import React from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../UI-kit/Button/Button";
import { Modal } from "../../UI-kit/Modal/Modal";
import styles from "./DeletePackModal.module.css";

export const DeletePackModal: React.FC<DeleteModalPropsType> = ({
    onClose,
    onDelete,
}) => {
    return (
        <Modal onClose={onClose}>
            <div className={styles.wrapper}>
                <h2>Delete Pack</h2>
                <p>
                    Do you really want to remove this Pack? <br /> All cards
                    will be excluded from this course.
                </p>

                <div className={styles.btnsWrapper}>
                    <Button purple onClick={onClose} className={styles.btn}>
                        Cancel
                    </Button>
                    <Button red onClick={onDelete} className={styles.btn}>
                        Delete
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
type DeleteModalPropsType = {
    onClose: () => void;
    onDelete: () => void;
};
