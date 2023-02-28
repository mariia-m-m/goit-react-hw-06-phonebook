import { nanoid } from "nanoid";
import { createAction } from '@reduxjs/toolkit';
// import { ADD_CONTACT, DELETE_CONTACT } from "./contacts-types";


export const addContact = createAction("contacts/add", data => {
    return {
        payload: {
            ...data,
            id: nanoid()
        }
    }
});
export const deleteContact = createAction("contacts/delete");

// export const addContact = payload => {
//     return {
//         type: ADD_CONTACT,
//         payload: {
//             id: nanoid(3),
//             ...payload,
//         }
//     }
// }

// export const deleteContact = payload => {
//     return {
//         type: DELETE_CONTACT,
//         payload
//     }
// }
