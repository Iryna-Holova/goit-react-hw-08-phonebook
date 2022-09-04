import { ContactForm } from "components/ContactForm/ContactForm";
import { FormTitle } from "components/ContactForm/ContactForm.styled";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

const Contacts = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }}>
    <ContactForm />
    <div>
      <FormTitle>Your contacts</FormTitle>
      <Filter />
      <ContactList />
    </div>
    
  </div>
);

export default Contacts;