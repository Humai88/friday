import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop: React.FC<ModalPropsType> = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<DefaultDivPropsType> = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
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
type ModalPropsType = DefaultDivPropsType & { onClose: () => void };
