import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter:filterReducer,
})


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default persistedReducer