import PropTypes from "prop-types";
import { ImUser, ImPhone, ImBin, ImPencil } from "react-icons/im";
import { useDeleteContactMutation } from "redux/contactsApi";
import { ContactButton, ContactItem, ContactWrapper } from "./ContactListItem.styled";
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import Modal from "components/Modal/Modal";

export const ContactListItem = ({ contact }) => {
    const { id, name, number } = contact;
    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    const [isModal, setIsModal] = useState(false);

    const toggleModal = () => {
        setIsModal(prev => !prev);
    }

    return (
        <ContactItem>
            <ContactWrapper><ImUser /> {name}</ContactWrapper>
            <ContactWrapper><ImPhone /> {number}</ContactWrapper>
            <ContactButton
                onClick={toggleModal}>
                <ImPencil />
            </ContactButton>
            <ContactButton
                disabled={isLoading}
                onClick={() => deleteContact(id)}>
                {!isLoading ? <ImBin /> : <Loader />}
            </ContactButton>
            {(isModal && <Modal onClose={toggleModal}>
                <ContactForm
                    id={id}
                    prevName={name}
                    prevNumber={number}
                    onClose={toggleModal}
                />
            </Modal>)}
        </ContactItem>
    )
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
};