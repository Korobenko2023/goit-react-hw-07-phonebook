import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListUl } from "./ContactList.style";
import { selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
  const сontacts = useSelector(selectVisibleContacts);
 
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