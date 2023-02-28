// import {FILTER_CONTACT } from './filter-types';
import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from "./filter-actions";

const filterReducer=createReducer("",{[setFilter]:(_,{payload})=>payload})

// const initialStore = "";

//  const filterReducer = (store=initialStore,{type,payload}) => {
//     switch (type) {
        
//         case FILTER_CONTACT:
//             return payload
//         default: return store
//     }
// }

export default filterReducer
