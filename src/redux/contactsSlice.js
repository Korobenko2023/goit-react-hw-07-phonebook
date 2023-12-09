import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
   name: 'contacts',  
   initialState: {
   items: [],
   isLoading: false,
   error: null,
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

export const contactsReducer = contactsSlice.reducer;





