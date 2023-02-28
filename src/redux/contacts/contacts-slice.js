import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { addContact, deleteContact } from "./contacts-actions";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, { payload }) => {
                state.push(payload)
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        },
        deleteContact:(state, { payload })=> state.filter(({ id }) => id !== payload),
    
    }
})
    
export const { addContact, deleteContact } = booksSlice.actions;
export const reducer=booksSlice.reducer;