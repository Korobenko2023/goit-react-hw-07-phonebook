import { AppContainer, AppTitle, AppTitleContact } from "./App.style";
import { GlobalStyle } from "components/Services/GlobalStyle";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { Loader } from "components/Loader/Loader";

export const App = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
   const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  return (
      <AppContainer>
         <AppTitle>Phonebook</AppTitle>
         <ContactForm />        
         {isLoading && !error && <Loader />}
         {contacts.length > 0 ? (
             <>
               <AppTitleContact>Contacts list</AppTitleContact>
               <ContactList />
               <Filter />
             </>
            ) : null}        
        <Toaster position="top-center"/> 
        <GlobalStyle />
      </AppContainer>
    );  
};
  
 

 