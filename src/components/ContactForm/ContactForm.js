import * as Yup from 'yup';
import { Formik } from 'formik';
import { ContactFormButton, ContactFormError, ContactFormField, ContactFormForm, ContactFormLabel } from './ContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

 const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
  number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: 'Invalid Phone Number!',
      excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(15, 'Invalid phone number!'),
  });

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = (newContact, {resetForm}) => {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      toast.error(`${newContact.name} is already in contacts.`);
      resetForm(); 
      return;
    }
    dispatch(addContact(newContact));   
    resetForm(); 
};
      
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={addNewContact}
      validationSchema={validationSchema}
    >
        <ContactFormForm>
            <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
              <ContactFormField id="name" type="text" name="name" placeholder="Jim Doun" />
              
              <ContactFormError name="name" component="div" />      
              
            <ContactFormLabel htmlFor="number">Number</ContactFormLabel>
              <ContactFormField id="number" type="tel" name="number" placeholder="+XX..." />
              
            <ContactFormError name="number" component="div" />

            <ContactFormButton type="submit">Add contact</ContactFormButton>
        </ContactFormForm>
    </Formik>
  );
};

