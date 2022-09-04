import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/contactsApi";
import { ContactListContainer } from "./ContactList.styled";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { Loader } from "components/Loader/Loader";

export const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    const { data: contacts = [], isLoading } = useGetContactsQuery();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ContactListContainer>
            {isLoading && <Loader message='Loading...'/>}
            {filteredContacts && filteredContacts.map(contact => 
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                />
            )}
        </ContactListContainer>
    )
};