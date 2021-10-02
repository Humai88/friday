import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

export const Backdrop: React.FC<ModalPropsType> = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose} />;
};

export const ModalOverlay: React.FC<DefaultDivPropsType> = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

export const Modal: React.FC<ModalPropsType> = ({ onClose, children }) => {
    return (
        <Fragment>
            {portalElement
                ? ReactDOM.createPortal(
                      <Backdrop onClose={onClose} />,
                      portalElement
                  )
                : null}
            {portalElement
                ? ReactDOM.createPortal(
                      <ModalOverlay>{children}</ModalOverlay>,
                      portalElement
                  )
                : null}
        </Fragment>
    );
};

// Types
type DefaultDivPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLInputElement
>;
type ModalPropsType = DefaultDivPropsType & { onClose?: () => void };
