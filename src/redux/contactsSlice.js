import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
   name: 'contacts',  
   initialState: {
     contacts: [],
   },
  reducers: {
      addContact: {
           prepare({ name, number}) {
              return {
                 payload: {
                    id: nanoid(),
                    name,
                    number,
                 },
              };
           },
        reducer(state, action) {
                state.contacts = [...state.contacts, action.payload]             
            },
       },
     deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
       },
  },    
});

const persistConfig = {
  key: 'list-contacts',
  storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;



