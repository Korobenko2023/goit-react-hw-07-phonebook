import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filteredContacts(state, action) {
            return (state = action.payload);
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { filteredContacts } = filterSlice.actions;

