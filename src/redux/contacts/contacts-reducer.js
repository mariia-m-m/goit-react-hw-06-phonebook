import { createReducer } from '@reduxjs/toolkit';
import {addContact, deleteContact} from "./contacts-actions"

// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const contactsReducer = createReducer([], {
    [addContact]: (state, { payload }) => {
        state.push(payload)
    },
      
    [deleteContact]: (state, { payload }) =>
        state.filter((item) => item.id !== payload)
})

// const initialStore = [];

//  const contactsReducer = (store=initialStore,{type,payload}) => {
//     switch (type) {
//         case ADD_CONTACT:
//             return [ ...store, payload ];
       
//         case DELETE_CONTACT:
//             return store.filter((item) => item.id !== payload);
//         default: return store;
        
//     }
// }

export default contactsReducer
