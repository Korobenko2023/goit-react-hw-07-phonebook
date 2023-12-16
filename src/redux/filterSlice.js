import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filteredContacts(state, { payload }) {
            return (state = payload);
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { filteredContacts } = filterSlice.actions;

