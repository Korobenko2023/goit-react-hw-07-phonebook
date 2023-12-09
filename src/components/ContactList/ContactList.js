import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { ContactListUl } from "./ContactList.style";
// import { selectContacts, selectFilter } from "redux/selectors";
import { selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const сontacts = useSelector(selectVisibleContacts);
  
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
  
  return (
    <ContactListUl>
      {сontacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}        
        />
      ))}
    </ContactListUl>
  );
};