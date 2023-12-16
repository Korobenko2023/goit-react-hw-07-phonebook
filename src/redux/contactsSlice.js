import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
   name: 'contacts',  
   initialState: {
   items: [],
   isLoading: false,
   error: null,
   },
   extraReducers: builder => {
      builder
         .addCase(fetchContacts.pending, handlePending)
         .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
         })
         .addCase(fetchContacts.rejected, handleRejected)
         .addCase(addContact.pending, handlePending)
         .addCase(addContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null; 
            state.items.push(payload);
         })
         .addCase(addContact.rejected, handleRejected)
         .addCase(deleteContact.pending, handlePending)
         .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== payload)
         })
         .addCase(deleteContact.rejected, handleRejected)
   }, 
});

export const contactsReducer = contactsSlice.reducer;

 


