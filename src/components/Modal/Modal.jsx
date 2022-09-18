import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { ModalWindow, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

const Modal = ({onClose, children}) => {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow>{children}</ModalWindow>
        </Overlay>,
        modalRoot
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;