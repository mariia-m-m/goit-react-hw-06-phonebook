import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";
import { persistReducer } from 'redux-persist';

import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

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