import { useDispatch } from "react-redux";
import { ContactItemButton, ContactItemLi } from "./ContactItem.style";
import { deleteContact } from "redux/contactsSlice";

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  
  return (
    <ContactItemLi>
      {name}: {number}
      <ContactItemButton onClick={() => dispatch(deleteContact(id))}>Delete</ContactItemButton>
    </ContactItemLi>
  );
};