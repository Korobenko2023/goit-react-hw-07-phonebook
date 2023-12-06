import { AppContainer, AppTitle, AppTitleContact } from "./App.style";
import { GlobalStyle } from "components/Services/GlobalStyle";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />     
        <AppTitleContact>Contacts list</AppTitleContact>
        <Filter />       
        <ContactList /> 
        <Toaster position="top-center"/> 
        <GlobalStyle />
      </AppContainer>
    );  
};
  
 

 