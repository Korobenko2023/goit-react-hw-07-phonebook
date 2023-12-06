import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { ContactListUl } from "./ContactList.style";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
  
  return (
    <ContactListUl>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}        
        />
      ))}
    </ContactListUl>
  );
};